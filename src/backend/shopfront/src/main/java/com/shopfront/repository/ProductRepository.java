package com.shopfront.repository;

import com.shopfront.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // Custom query methods can be defined here if needed
    // For example, to find products by name or category
    // List<Product> findByNameContainingIgnoreCase(String name);
    // List<Product> findByCategoryName(String categoryName);
}
