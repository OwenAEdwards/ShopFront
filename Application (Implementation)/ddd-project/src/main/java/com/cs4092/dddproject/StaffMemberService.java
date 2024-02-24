package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffMemberService {
    private final StaffMemberRepository staffMemberRepository;

    // Dependency injection
    @Autowired
    public StaffMemberService(StaffMemberRepository staffMemberRepository) {
        this.staffMemberRepository = staffMemberRepository;
    }
}
