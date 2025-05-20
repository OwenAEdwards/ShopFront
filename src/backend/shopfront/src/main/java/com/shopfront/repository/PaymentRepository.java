package com.shopfront.repository;

import com.shopfront.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    // Find all payments for a given order
    List<Payment> findByOrderId(Long orderId);
}
