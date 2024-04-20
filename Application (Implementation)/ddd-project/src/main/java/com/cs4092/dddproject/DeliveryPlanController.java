package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/delivery-plans")
@CrossOrigin(origins = "*")
public class DeliveryPlanController {
    private final DeliveryPlanService deliveryPlanService;
    private final OrderService orderService;

    // Dependency injection
    @Autowired
    public DeliveryPlanController(DeliveryPlanService deliveryPlanService, OrderService orderService) {
        this.deliveryPlanService = deliveryPlanService;
        this.orderService = orderService;
    }

    // Create a delivery plan for an order (assuming authorization for order access)
    @PostMapping("/{orderId}")
    public ResponseEntity<DeliveryPlan> createDeliveryPlan(@PathVariable Long orderId) {
        Order order = orderService.getOrderById(orderId); // Assuming OrderService is available
        if (order == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        DeliveryPlan deliveryPlan = deliveryPlanService.createDeliveryPlan(order);
        return new ResponseEntity<>(deliveryPlan, HttpStatus.CREATED);
    }

    // Get a delivery plan by order ID
    @GetMapping("/{orderId}")
    public ResponseEntity<DeliveryPlan> getDeliveryPlanByOrderId(@PathVariable Long orderId) {
        DeliveryPlan deliveryPlan = deliveryPlanService.getDeliveryPlanByOrderId(orderId);
        if (deliveryPlan == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(deliveryPlan, HttpStatus.OK);
    }
}
