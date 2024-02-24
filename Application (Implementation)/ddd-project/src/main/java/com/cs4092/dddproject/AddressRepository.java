package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<Address, Long> from private Long id; from Address.java
public interface AddressRepository extends JpaRepository<Address, Long> {
}
