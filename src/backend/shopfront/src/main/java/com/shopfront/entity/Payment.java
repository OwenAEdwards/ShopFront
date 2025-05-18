package com.shopfront.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    private String paymentMethod;
    private String paymentStatus;
    private BigDecimal paymentAmount;
    private LocalDateTime createdAt;
}
