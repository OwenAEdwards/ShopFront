package com.shopfront.repository;

import com.shopfront.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
    // Get the User by userId off the Cart
    Cart findByUserId(Long userId);
}
