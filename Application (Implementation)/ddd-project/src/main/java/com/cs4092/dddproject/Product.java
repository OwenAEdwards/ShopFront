package com.cs4092.dddproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

/* This class represent a product in the store. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(nullable = false)
    @NotEmpty
    private String category;

    @Column(nullable = false)
    @NotEmpty
    private String productName;

    @Column(nullable = false)
    @NotEmpty
    private String brand;

    @Column(nullable = false)
    @NotEmpty
    private String size;

    @Column(nullable = false)
    @NotEmpty
    private String description;

    @Column(precision = 10, scale = 2)
    @DecimalMin(value = "0.0")
    private BigDecimal price;

    @OneToMany(mappedBy = "product")
    private List<Stock> stock;

    @OneToMany(mappedBy = "product")
    private List<SupplierItem> supplierItems;
}
