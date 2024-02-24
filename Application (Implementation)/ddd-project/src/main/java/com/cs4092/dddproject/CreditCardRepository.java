package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<CreditCard, Long> from private Long id; from CreditCard.java
public interface CreditCardRepository extends JpaRepository<CreditCard, Long> {
}
