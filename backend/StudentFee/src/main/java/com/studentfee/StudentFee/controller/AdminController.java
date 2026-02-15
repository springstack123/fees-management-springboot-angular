package com.studentfee.StudentFee.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.studentfee.StudentFee.dto.AdminLoginRequest;
import com.studentfee.StudentFee.model.AdminLogin;
import com.studentfee.StudentFee.repository.AdminLoginRepository;

@RestController
@CrossOrigin(origins = {
        "http://localhost:4200",
        "https://fees-frontend.onrender.com"
})
@RequestMapping("/student_fee")
public class AdminController {

    @Autowired
    AdminLoginRepository admRepo;

    @PostMapping("/admin/login")
    public AdminLogin login(@RequestBody AdminLoginRequest request) {

        Optional<AdminLogin> admin =
                Optional.ofNullable(
                    admRepo.findByEmailIdAndPassword(
                        request.getEmailid(),
                        request.getPassword()
                    )
                );

        return admin.orElse(null);
    }
}
