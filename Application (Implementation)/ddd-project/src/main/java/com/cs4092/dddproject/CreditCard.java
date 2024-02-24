package com.cs4092.dddproject;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CreditCard {
    @Id // Primary key
    private Long id;
}
