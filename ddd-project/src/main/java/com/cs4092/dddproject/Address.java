package com.cs4092.dddproject;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id") // Foreign key
    @JsonBackReference
    private Customer customer;

    @OneToOne
    @JoinColumn(name = "staff_id") // Foreign key
    private StaffMember staffMember;

    @OneToOne
    @JoinColumn(name = "warehouse_id") // Foreign key
    private Warehouse warehouse;

    @OneToOne
    @JoinColumn(name = "supplier_id") // Foreign key
    private Supplier supplier;

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
