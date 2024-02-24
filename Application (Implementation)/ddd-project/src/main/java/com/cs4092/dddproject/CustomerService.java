package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    private final UserRepository userRepository;
    private final AddressRepository addressRepository;
    private final CreditCardRepository creditCardRepository;
    private final OrderRepository orderRepository;

    // Dependency injection
    @Autowired
    public CustomerService(UserRepository userRepository, AddressRepository addressRepository,
                           CreditCardRepository creditCardRepository, OrderRepository orderRepository) {
        this.userRepository = userRepository;
        this.addressRepository = addressRepository;
        this.creditCardRepository = creditCardRepository;
        this.orderRepository = orderRepository;
    }
}
