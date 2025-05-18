package com.shopfront.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "product_categories")
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productCategoryId;

    private String name;
    private String description;

    @OneToMany(mappedBy = "category")
    private List<Product> products;
}
