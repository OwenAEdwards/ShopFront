package com.cs4092.dddproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

/* This class represents a credit card associated with a customer. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreditCard {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long creditCardId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Foreign key
    private User user;

    @Column(nullable = false)
    @NotEmpty
    private String cardNumber;

    @Column(nullable = false)
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) // For proper serialization
    private LocalDate expirationDate;
}
