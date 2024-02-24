package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<User, Long> from private Long id; from User.java
public interface UserRepository extends JpaRepository<User, Long> {
}
