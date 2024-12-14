package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<StaffMember, Long> from private Long id; from StaffMember.java
public interface StaffMemberRepository extends JpaRepository<StaffMember, Long> {
}
