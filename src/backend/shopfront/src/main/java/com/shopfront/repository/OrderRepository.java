package com.shopfront.repository;

import com.shopfront.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // Get all orders by user
    List<Order> findByUser_UserId(Long userId);
}
