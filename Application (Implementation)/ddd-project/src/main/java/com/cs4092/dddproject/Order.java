package com.cs4092.dddproject;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

/* This class represents an order placed by a customer. */
@Entity
@Table(name = "\"order\"")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false) // Foreign key
    private Customer customer;

    @Column(nullable = false)
    @NotEmpty
    private String orderStatus; // e.g., "placed", "shipped", "completed", "canceled"

    @OneToOne
    @JoinColumn(name = "card_id", nullable = false)
    private CreditCard creditCard;

    @Column(nullable = false)
    private LocalDateTime orderDate;

    @OneToMany(mappedBy = "order")
    private List<OrderItem> orderItems;

    @OneToOne
    @JoinColumn(name = "order_id")
    private DeliveryPlan deliveryPlan;
}
