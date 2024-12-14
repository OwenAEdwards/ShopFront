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

    @OneToMany(mappedBy = "supplierItemId") //TODO: why did this fix this error: 2024-04-19T14:06:25.412-04:00 ERROR 14020 --- [  restartedMain] j.LocalContainerEntityManagerFactoryBean : Failed to initialize JPA EntityManagerFactory: Collection 'com.cs4092.dddproject.Product.supplierItem' is 'mappedBy' a property named 'supplierItem' which does not exist in the target entity 'com.cs4092.dddproject.SupplierItem'
    private List<SupplierItem> supplierItems;
}
