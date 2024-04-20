package com.cs4092.dddproject;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {
    private final OrderService orderService;
    private final CustomerService customerService;

    // Dependency injection
    @Autowired
    public OrderController(OrderService orderService, CustomerService customerService) {
        this.orderService = orderService;
        this.customerService = customerService;
    }

    // Place a new order (assuming validation and processing happen within OrderService)
    @PostMapping
    public ResponseEntity<Order> placeOrder(@PathVariable Long customerId, @Valid @RequestBody Order order) {
        Customer customer = customerService.getCustomerById(customerId); // Assuming CustomerService is available
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Order savedOrder = orderService.placeOrder(customer, order);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    // Process an order (assuming authorization and validation are handled)
    @PutMapping("/{orderId}/process")
    public ResponseEntity<Void> processOrder(@PathVariable Long orderId, @RequestParam(required = false) Long targetWarehouseId) {
        orderService.processOrder(orderService.getOrderById(orderId), targetWarehouseId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // Get all orders for a customer
    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<Order>> getOrdersByCustomer(@PathVariable Long customerId) {
        Customer customer = customerService.getCustomerById(customerId); // Assuming CustomerService is available
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<Order> orders = orderService.getOrdersByCustomer(customer);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    // Get order details by ID (consider adding access control based on user role)
    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long orderId) {
        Order order = orderService.getOrderById(orderId);
        if (order == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(order, HttpStatus.OK);
    }
}
