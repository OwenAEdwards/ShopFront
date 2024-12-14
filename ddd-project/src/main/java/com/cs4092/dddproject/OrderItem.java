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

/* This class represents an item in a specific order. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemId;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false) // Foreign key
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false) // Foreign key
    private Product product;

    @Column(nullable = false)
    @Min(value = 0)
    private Integer quantity;
}
