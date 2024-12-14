package com.cs4092.dddproject;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/* This class represents a product offered by a specific supplier, including the supplier's price for
 that product. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SupplierItem {
    @Id // Primary key and foreign key to Supplier
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long supplierItemId;

    @ManyToOne
    @JoinColumn(name = "supplier_id") // Foreign key
    private Supplier supplier;

    @ManyToOne
    @JoinColumn(name = "product_id") // Foreign key
    private Product product;

    @Column(precision = 10, scale = 2)
    @DecimalMin(value = "0.0")
    private BigDecimal supplierPrice;
}
