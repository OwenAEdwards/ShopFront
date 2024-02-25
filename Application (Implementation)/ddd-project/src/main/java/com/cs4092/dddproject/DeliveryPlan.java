package com.cs4092.dddproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

/* This class represents the delivery details for an order. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryPlan {
    @Id // Primary key and foreign key to Order
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(nullable = false)
    @NotEmpty
    private String deliveryType; // e.g., "standard", "express", "customizable"

    @Column(precision = 10, scale = 2)
    @DecimalMin(value = "0.0")
    private BigDecimal deliveryPrice;

    @Column(nullable = false)
    private LocalDate deliveryDate;

    @Column(nullable = false)
    private LocalDate shipDate;


}
