package com.studentfee.StudentFee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.studentfee.StudentFee.model.AdminLogin;
import com.studentfee.StudentFee.repository.AdminLoginRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/student_fee")
public class AdminController {

    @Autowired
    AdminLoginRepository admRepo;

    @GetMapping("/admin/{emailid}/{password}")
    public AdminLogin login(@PathVariable String emailid,
                            @PathVariable String password) {

        return admRepo.findByEmailIdAndPassword(emailid, password);
    }
}
