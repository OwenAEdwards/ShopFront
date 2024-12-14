package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<Warehouse, Long> from private Long id; from Warehouse.java
public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {
}
