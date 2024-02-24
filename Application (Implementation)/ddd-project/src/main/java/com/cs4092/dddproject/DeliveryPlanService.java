package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeliveryPlanService {
    private final DeliveryPlanRepository deliveryPlanRepository; // For delivery plan data access
    private final OrderService orderService; // For interacting with orders

    // Dependency injection
    @Autowired
    public DeliveryPlanService(DeliveryPlanRepository deliveryPlanRepository, OrderService orderService) {
        this.deliveryPlanRepository = deliveryPlanRepository;
        this.orderService = orderService;
    }
}
