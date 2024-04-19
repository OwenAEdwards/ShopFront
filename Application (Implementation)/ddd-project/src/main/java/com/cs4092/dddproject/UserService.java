package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final StaffMemberRepository staffMemberRepository;
    private final CustomerRepository customerRepository;

    // Dependency injection
    @Autowired
    public UserService(StaffMemberRepository staffMemberRepository, CustomerRepository customerRepository) {
        this.staffMemberRepository = staffMemberRepository;
        this.customerRepository = customerRepository;
    }
}
