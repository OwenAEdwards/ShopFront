package com.cs4092.dddproject;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

/* This class inherits from User and contain customer-specific information, such as addresses, credit
cards, and balance. */
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Customer extends User {
    // Extends User, has no primary key
}
