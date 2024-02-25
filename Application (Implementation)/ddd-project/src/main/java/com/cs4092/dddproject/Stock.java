package com.cs4092.dddproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/* This class represents the quantity of a specific product in a specific warehouse. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Stock {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stockId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false) // Foreign key
    private Product product;

    @ManyToOne
    @JoinColumn(name = "warehouse_id", nullable = false) // Foreign key
    private Warehouse warehouse;

    @Column(nullable = false)
    @Min(value = 0)
    private Integer quantity;
}
