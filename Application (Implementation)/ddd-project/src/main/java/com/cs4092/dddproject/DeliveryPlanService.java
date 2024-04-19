package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;

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

    // Create a delivery plan for an order (assuming cost calculation happens within)
    public DeliveryPlan createDeliveryPlan(Order order) {
        // Calculate delivery cost based on order details and delivery type (implementation needed)
        BigDecimal deliveryPrice = calculateDeliveryCost(order);

        // Create a delivery plan with calculated cost (adjust arguments based on your logic)
        DeliveryPlan deliveryPlan = new DeliveryPlan(
                order.getOrderId(), // Assuming orderId from Order is used as foreign key
                // Set delivery type based on logic (e.g., default, customer selection)
                "standard",
                deliveryPrice,
                LocalDate.now().plusDays(2), // Placeholder, adjust based on your logic
                LocalDate.now().plusDays(7)  // Placeholder, adjust based on your logic
        );

        // Save the delivery plan
        return deliveryPlanRepository.save(deliveryPlan);
    }


    // Get a delivery plan by order ID
    public DeliveryPlan getDeliveryPlanByOrderId(Long orderId) {
        return deliveryPlanRepository.findById(orderId).orElse(null);
    }

    // Placeholder method for calculating delivery cost (replace with actual logic)
    private BigDecimal calculateDeliveryCost(Order order) {
        // Implement logic to calculate delivery cost based on order weight, location etc.
        // This example returns a fixed cost
        return new BigDecimal("10.00");
    }
}
