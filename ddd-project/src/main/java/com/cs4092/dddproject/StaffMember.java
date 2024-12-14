package com.cs4092.dddproject;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

/* This class contains staff member-specific information, such as staff member ID, name, addresses,
 salary and job title. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StaffMember {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffMemberId;

    @Column(nullable = false)
    @NotEmpty
    private String name;

    @OneToOne
    @JoinColumn(name = "address_id")
    private Address address;

    @Column(precision = 10, scale = 2)
    @DecimalMin(value = "0.0")
    private BigDecimal salary;

    @Column(nullable = false)
    @NotEmpty
    private String jobTitle;
}
