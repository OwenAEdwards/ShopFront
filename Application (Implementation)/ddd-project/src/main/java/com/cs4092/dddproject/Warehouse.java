package com.cs4092.dddproject;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/* This class represents a warehouse where products are stored. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Warehouse {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long warehouseId;

    @OneToOne
    @JoinColumn(name = "address_id") // Foreign key
    private Address address;

    @OneToMany(mappedBy = "warehouse")
    private List<Stock> stock;

    @Column(nullable = false)
    @Min(value = 0)
    private Integer capacity;
}
