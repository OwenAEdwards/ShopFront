package com.cs4092.dddproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    // TODO: implement supplierID and productID as foreign keys, find support in SQL database

    @Column(precision = 10, scale = 2)
    @DecimalMin(value = "0.0")
    private BigDecimal supplierPrice;
}
