package com.cs4092.dddproject;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

/* This class contains customer-specific information, such as customer ID, name, addresses, credit
cards, and balance. */
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;

    @Column(nullable = false)
    @NotEmpty
    private String name;

    @OneToMany(mappedBy = "customer")
    private List<Address> addresses;

    @OneToMany(mappedBy = "customer")
    private List<CreditCard> creditCards;

    @Column(precision = 10, scale = 2)
    @DecimalMin(value = "0.0")
    private BigDecimal balance;
}
