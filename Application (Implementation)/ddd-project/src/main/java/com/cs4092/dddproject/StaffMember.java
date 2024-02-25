package com.cs4092.dddproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/* This class inherits from User and contain staff member-specific information, such as salary and job
 title. */
@Entity
@Data
@EqualsAndHashCode(callSuper = true) // prevents creating getters/setters on subclass
@AllArgsConstructor
@NoArgsConstructor
public class StaffMember extends User {
    // Extends User, has no primary key

    @Column(precision = 10, scale = 2)
    @DecimalMin(value = "0.0")
    private BigDecimal salary;

    @Column(nullable = false)
    @NotEmpty
    private String jobTitle;
}
