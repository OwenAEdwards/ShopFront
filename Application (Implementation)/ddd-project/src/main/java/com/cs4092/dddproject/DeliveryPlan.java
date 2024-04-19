package com.cs4092.dddproject;

import jakarta.persistence.*;
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

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;

    // New constructor without Order as last argument (used in DeliveryPlanService)
    public DeliveryPlan(Long orderId, String deliveryType, BigDecimal deliveryPrice,
                        LocalDate deliveryDate, LocalDate shipDate) {
        this.orderId = orderId;
        this.deliveryType = deliveryType;
        this.deliveryPrice = deliveryPrice;
        this.deliveryDate = deliveryDate;
        this.shipDate = shipDate;
    }
}
