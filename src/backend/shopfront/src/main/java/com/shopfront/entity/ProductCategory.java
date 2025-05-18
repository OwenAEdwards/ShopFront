package com.shopfront.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productCategoryId;

    private String name;
    private String description;

    @OneToMany(mappedBy = "product_category")
    private List<Product> products;
}
