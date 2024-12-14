package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<OrderItem, Long> from private Long id; from OrderItem.java
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
