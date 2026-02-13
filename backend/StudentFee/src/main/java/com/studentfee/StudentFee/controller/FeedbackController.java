package com.studentfee.StudentFee.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.studentfee.StudentFee.model.Feedback;
import com.studentfee.StudentFee.repository.FeedbackRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/student_fee")
public class FeedbackController {

    @Autowired
    FeedbackRepository feedRepo;

    @GetMapping("/feedback")
    public ArrayList<Feedback> feedback() {
        return (ArrayList<Feedback>) feedRepo.findAll();
    }

    @PostMapping("/feedback")
    public Feedback savefeedback(@RequestBody Feedback f) {
        return feedRepo.save(f);
    }
}
