package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    private final AddressRepository addressRepository;
    private final CreditCardRepository creditCardRepository;
    private final CustomerRepository customerRepository;
    private final OrderRepository orderRepository;

    // Dependency injection
    @Autowired
    public CustomerService(AddressRepository addressRepository,
                           CreditCardRepository creditCardRepository,
                           CustomerRepository customerRepository,
                           OrderRepository orderRepository) {
        this.addressRepository = addressRepository;
        this.creditCardRepository = creditCardRepository;
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
    }
}
