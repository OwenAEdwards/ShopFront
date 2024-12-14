package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<Product, Long> from private Long id; from Product.java
public interface ProductRepository extends JpaRepository<Product, Long> {
}
