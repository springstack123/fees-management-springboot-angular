package com.studentfee.StudentFee.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.studentfee.StudentFee.dto.LoginRequest;
import com.studentfee.StudentFee.model.Register;
import com.studentfee.StudentFee.repository.RegisterRepository;

@RestController
@RequestMapping("/student_fee")
@CrossOrigin(origins = {
        "http://localhost:4200",
        "https://fees-frontend.onrender.com"
})
public class RegisterController {

    @Autowired
    private RegisterRepository registerRepository;

    // ✅ Get All
    @GetMapping("/register")
    public List<Register> getAllStudents() {
        return registerRepository.findAll();
    }

    // ✅ Get by Email
    @GetMapping("/register/email/{email}")
    public Register getByEmail(@PathVariable String email) {
        return registerRepository.findByEmailid(email).orElse(null);
    }

    // ✅ Register
    @PostMapping("/register")
    public Register registerStudent(@RequestBody Register register) {
        return registerRepository.save(register);
    }

    // ✅ Login
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
