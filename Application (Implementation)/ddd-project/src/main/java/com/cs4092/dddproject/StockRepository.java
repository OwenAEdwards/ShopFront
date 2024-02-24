package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<Stock, Long> from private Long id; from Stock.java
public interface StockRepository extends JpaRepository<Stock, Long> {
}
