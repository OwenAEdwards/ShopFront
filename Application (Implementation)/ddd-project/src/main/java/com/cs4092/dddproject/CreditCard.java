package com.cs4092.dddproject;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
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
    private Long cardId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false) // Foreign key
    @JsonBackReference
    private Customer customer;

    @Column(nullable = false)
    @NotEmpty
    private String cardNumber;

    @OneToOne
    @JoinColumn(name = "card_id") // Foreign key
    private Order order;

    @Column(nullable = false)
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) // For proper serialization
    private LocalDate expirationDate;
}
