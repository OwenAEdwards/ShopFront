package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<DeliveryPlan, Long> from private Long id; from DeliveryPlan.java
public interface DeliveryPlanRepository extends JpaRepository<DeliveryPlan, Long> {
}
