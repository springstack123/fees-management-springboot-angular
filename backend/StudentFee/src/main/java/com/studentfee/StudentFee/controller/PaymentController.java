package com.studentfee.StudentFee.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentfee.StudentFee.model.Feedback;
import com.studentfee.StudentFee.model.Payment;
import com.studentfee.StudentFee.model.Register;
import com.studentfee.StudentFee.repository.PaymentRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/student_fee")
public class PaymentController {

    @Autowired
    PaymentRepository payRepo;

    @GetMapping("/payment")
    public ArrayList<Payment> payment() {
        return (ArrayList<Payment>) payRepo.findAll();
    }

    @PostMapping("/payment")
    public Payment savepaymet(@RequestBody Payment p) {
        return payRepo.save(p);
    }
}
