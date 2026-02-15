package com.studentfee.StudentFee.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.studentfee.StudentFee.dto.LoginRequest;
import com.studentfee.StudentFee.model.Register;
import com.studentfee.StudentFee.repository.RegisterRepository;
import com.studentfee.StudentFee.service.EmailService;

@RestController
@RequestMapping("/student_fee")
public class RegisterController {

    @Autowired
    private RegisterRepository registerRepository;

    // Get All Students
    @GetMapping("/register")
    public List<Register> getAllStudents() {
        return registerRepository.findAll();
    }
    @GetMapping("/register/email/{email}")
    public Register getByEmail(@PathVariable String email) {
        return registerRepository.findByEmailid(email).orElse(null);
    }
    // Register New Student
    @PostMapping("/register")
    public Register registerStudent(@RequestBody Register register) {

        if (register.getPercentage() == null) {
            register.setPercentage(0.0);
        }

        return registerRepository.save(register);
    }

    @Autowired
    private EmailService emailService;

    // Secure Login (POST)
    @PostMapping("/login")
    public Register login(@RequestBody LoginRequest loginRequest) {

        Optional<Register> user =
                registerRepository.findByEmailid(loginRequest.getEmailid());

        if (user.isPresent() &&
            user.get().getPassword().equals(loginRequest.getPassword())) {

            return user.get();
        }

        return null;
    }
}
