package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffMemberService {
    private final StaffMemberRepository staffMemberRepository;
    private final ProductService productService;
    private final OrderService orderService;
    private final CustomerService customerService;

    // Dependency injection
    @Autowired
    public StaffMemberService(StaffMemberRepository staffMemberRepository,
                              ProductService productService,
                              OrderService orderService,
                              CustomerService customerService) {
        this.staffMemberRepository = staffMemberRepository;
        this.productService = productService;
        this.orderService = orderService;
        this.customerService = customerService;
    }

    // Create a new product
    public Product createProduct(Product product) {
        return productService.createProduct(product);
    }

    // Process an order (assuming OrderService handles details)
    public void processOrder(Order order, Long targetWarehouseId) {
        orderService.processOrder(order, targetWarehouseId);
    }

    // View customer information by ID (assuming CustomerService handles details)
    public Customer getCustomerById(Long customerId) {
        return customerService.getCustomerById(customerId);
    }
}
