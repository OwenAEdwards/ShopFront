package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final ProductService productService; // For interacting with products
    private final CustomerService customerService; // For accessing customer data

    // Dependency injection
    @Autowired
    public OrderService(OrderRepository orderRepository, OrderItemRepository orderItemRepository,
                        ProductService productService, CustomerService customerService) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.productService = productService;
        this.customerService = customerService;
    }

}
