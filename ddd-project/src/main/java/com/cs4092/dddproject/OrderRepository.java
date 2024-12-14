package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<Order, Long> from private Long id; from Order.java
public interface OrderRepository extends JpaRepository<Order, Long> {
}
