package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    // Dependency injection
    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Create a new product
    public Product createProduct(Product product) {
        return productRepository.save(product); // Save the product
    }

    // Get a product by ID
    public Product getProductById(Long productId) {
        return productRepository.findById(productId).orElse(null); // Find by ID, return null if not found
    }

    // Update an existing product
    public Product updateProduct(Product product) {
        // Check if product exists first
        Product existingProduct = productRepository.findById(product.getProductId()).orElse(null);
        if (existingProduct == null) {
            throw new IllegalArgumentException("Product with ID: " + product.getProductId() + " not found.");
        }

        // Update relevant fields (excluding ID)
        existingProduct.setCategory(product.getCategory());
        existingProduct.setProductName(product.getProductName());
        existingProduct.setBrand(product.getBrand());
        existingProduct.setSize(product.getSize());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setPrice(product.getPrice());

        // Save the updated product
        return productRepository.save(existingProduct);
    }

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get a product by name
    public Product getProductByName(String productName) {
        List<Product> allProducts = productRepository.findAll();

        // Filter products by name
        List<Product> productsWithName = allProducts.stream()
                .filter(product -> product.getProductName().equalsIgnoreCase(productName))
                .collect(Collectors.toList());

        // Return the first product found, or null if not found
        return productsWithName.isEmpty() ? null : productsWithName.get(0);
    }

    // Delete a product (hard deletion)
    public void deleteProduct(Long productId) {
        Product product = productRepository.findById(productId).orElse(null);
        if (product == null) {
            throw new IllegalArgumentException("Product with ID: " + productId + " not found.");
        }

        // Perform hard deletion using the repository
        productRepository.deleteById(productId);
    }

    public boolean isAvailable(Long productId, int requiredQuantity) {
        Product product = productRepository.findById(productId).orElse(null);
        if (product == null) {
            return false; // Product not found, consider throwing an exception for clarity
        }

        int totalAvailableQuantity = 0;
        for (Stock stock : product.getStock()) {
            totalAvailableQuantity += stock.getQuantity();
        }

        return totalAvailableQuantity >= requiredQuantity;
    }

    public void updateInventory(Long productId, int quantityChange, Long targetWarehouseId) {
        Product product = productRepository.findById(productId).orElse(null);
        if (product == null) {
            throw new IllegalArgumentException("Product with ID: " + productId + " not found.");
        }

        List<Stock> stockList = product.getStock();
        if (stockList.isEmpty()) {
            throw new RuntimeException("No stock found for product: " + product.getProductName());
        }

        Stock targetStock = null;
        for (Stock stock : stockList) {
            if (stock.getWarehouse().getWarehouseId().equals(targetWarehouseId)) {
                targetStock = stock;
                break;
            }
        }

        if (targetStock == null) {
            throw new IllegalArgumentException("Stock not found for product in target warehouse (ID: " + targetWarehouseId + ")");
        }

        int newQuantity = targetStock.getQuantity() + quantityChange;
        if (newQuantity < 0) {
            throw new RuntimeException("Insufficient inventory for product: " + product.getProductName());
        }

        targetStock.setQuantity(newQuantity);
        productRepository.save(product); // Saving the product also saves the associated Stock entity
    }
}
