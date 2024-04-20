package com.cs4092.dddproject;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/staff-members")
@CrossOrigin(origins = "*") //needed an extra import??
public class StaffMemberController {
    private final StaffMemberService staffMemberService;

    // Dependency injection
    @Autowired
    public StaffMemberController(StaffMemberService staffMemberService) {
        this.staffMemberService = staffMemberService;
    }

    // Create a new staff member (implement validation and error handling)
//    @PostMapping
//    public ResponseEntity<StaffMember> createStaffMember(@Valid @RequestBody StaffMember staffMember) {
//        StaffMember savedStaffMember = staffMemberService.saveStaffMember(staffMember); // Assuming saveStaffMember exists in StaffMemberService
//        return new ResponseEntity<>(savedStaffMember, HttpStatus.CREATED);
//    }

    // Get all staff members (consider pagination for large datasets)
//    @GetMapping
//    public ResponseEntity<List<StaffMember>> getAllStaffMembers() {
//        List<StaffMember> staffMembers = staffMemberService.getAllStaffMembers(); // Assuming getAllStaffMembers exists in StaffMemberService
//        return new ResponseEntity<>(staffMembers, HttpStatus.OK);
//    }
//
//    // Get a staff member by ID
//    @GetMapping("/{staffMemberId}")
//    public ResponseEntity<StaffMember> getStaffMemberById(@PathVariable Long staffMemberId) {
//        StaffMember staffMember = staffMemberService.getStaffMemberById(staffMemberId); // Assuming getStaffMemberById exists in StaffMemberService
//        if (staffMember == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(staffMember, HttpStatus.OK);
//    }

    // Update a staff member (implement validation, error handling, and partial updates)
//    @PutMapping("/{staffMemberId}")
//    public ResponseEntity<StaffMember> updateStaffMember(@PathVariable Long staffMemberId, @Valid @RequestBody StaffMember staffMember) {
//        staffMember.setStaffMemberId(staffMemberId); // Set the ID from path variable
//        StaffMember updatedStaffMember = staffMemberService.updateStaffMember(staffMember); // Assuming updateStaffMember exists in StaffMemberService
//        return new ResponseEntity<>(updatedStaffMember, HttpStatus.OK);
//    }
}
