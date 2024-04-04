package com.cs4092.dddproject;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/* This class represents a supplier of products. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Supplier {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long supplierId;

    @OneToOne
    @JoinColumn(name = "address_id")
    private Address address;

    @Column(nullable = false)
    @NotEmpty
    private String name;

    @Column
    private String contactInformation;

    @OneToMany(mappedBy = "supplierItem")
    private List<SupplierItem> supplierItems;
}
