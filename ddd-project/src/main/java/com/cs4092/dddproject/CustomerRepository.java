package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<Customer, Long> from private Long id; from Customer.java
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
