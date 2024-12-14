package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<SupplierItem, Long> from private Long id; from SupplierItem.java
public interface SupplierItemRepository extends JpaRepository<SupplierItem, Long> {
}
