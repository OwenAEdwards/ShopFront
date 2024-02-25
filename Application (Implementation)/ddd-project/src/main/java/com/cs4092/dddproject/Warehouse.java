package com.cs4092.dddproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/* This class represents a warehouse where products are stored. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Warehouse {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long warehouseId;

    @Column(nullable = false)
    @NotEmpty
    private String address;

    @Column(nullable = false)
    @Min(value = 0)
    private Integer capacity;
}
