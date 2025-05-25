package com.shopfront.repository;

import com.shopfront.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Find User by their email
    User findByEmail(String email);
}
