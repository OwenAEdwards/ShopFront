package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<Supplier, Long> from private Long id; from Supplier.java
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
