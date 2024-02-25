package com.cs4092.dddproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/* This class represents an address, either for delivery or payment. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Foreign key
    private User user;

    @Column(nullable = false)
    @NotEmpty
    private String addressType; // 'Delivery' or 'Payment'

    @Column(nullable = false)
    @NotEmpty
    private String streetAddress;

    @Column(nullable = false)
    @NotEmpty
    private String city;

    @Column(nullable = false)
    @NotEmpty
    private String state;

    @Column(nullable = false)
    @NotEmpty
    private String zipCode;
}
