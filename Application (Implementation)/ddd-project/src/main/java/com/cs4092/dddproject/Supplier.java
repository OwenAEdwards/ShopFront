package com.cs4092.dddproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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

    @Column(nullable = false)
    @NotEmpty
    private String name;

    @Column
    @NotEmpty
    private String address;

    @Column
    private String contactInformation;

    @OneToMany(mappedBy = "supplier")
    private List<SupplierItem> supplierItems;
}
