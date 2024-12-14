package com.cs4092.dddproject;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {
    private final ProductService productService;

    // Dependency injection
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // Create a new product
    @PostMapping
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {
        Product savedProduct = productService.createProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    // Get a product by ID
    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) {
        Product product = productService.getProductById(productId);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    // Update an existing product
    @PutMapping("/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long productId, @Valid @RequestBody Product product) {
        product.setProductId(productId); // Set the ID to match the path variable
        Product updatedProduct = productService.updateProduct(product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    // Get all products (consider pagination for large datasets)
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    // Search for products by name (potentially replace with more comprehensive search)
    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProductsByName(@RequestParam String name) {
        Product product = productService.getProductByName(name);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<Product> productList = List.of(product); // Wrap the single product in a list for consistency
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    // Check product availability (implement proper stock management logic)
    @GetMapping("/{productId}/availability")
    public ResponseEntity<Boolean> checkAvailability(@PathVariable Long productId, @RequestParam int quantity) {
        boolean isAvailable = productService.isAvailable(productId, quantity);
        return new ResponseEntity<>(isAvailable, HttpStatus.OK);
    }

    // Update product inventory in a specific warehouse (implement proper transactions)
    @PutMapping("/{productId}/inventory/{warehouseId}")
    public ResponseEntity<Void> updateInventory(@PathVariable Long productId, @PathVariable Long warehouseId, @RequestParam int quantityChange) {
        productService.updateInventory(productId, quantityChange, warehouseId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // Delete a product (hard deletion)
    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
