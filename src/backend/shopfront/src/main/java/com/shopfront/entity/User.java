package com.shopfront.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String name;
    private String email;
    private String passwordHash;
    private String phone;
    private String address;
    private String role;

    private LocalDateTime createdAt;
}
