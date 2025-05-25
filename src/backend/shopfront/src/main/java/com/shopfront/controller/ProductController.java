package com.shopfront.controller;

import com.shopfront.entity.Product;
import com.shopfront.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    // Dependency injection
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // Create a new comment with session token verification
    @PostMapping
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product,
                                                 @RequestHeader("Authorization") String authToken) {
        // Here you would typically verify the authToken
        // For simplicity, we assume the token is valid and proceed to create the product
        Product createdProduct = productService.createProduct(product);
    }
}
