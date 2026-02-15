package com.studentfee.StudentFee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.studentfee.StudentFee.model.Feedback;
import com.studentfee.StudentFee.repository.FeedbackRepository;

@RestController
@CrossOrigin(origins = {
        "http://localhost:4200",
        "https://fees-frontend.onrender.com"
})
public class FeedbackController {

    @Autowired
    private FeedbackRepository repo;

    @PostMapping("/newfeedback")
    public Feedback newFeedback(@RequestBody Feedback f) {
        return repo.save(f);
    }

    @GetMapping("/allfeedback")
    public List<Feedback> getAllFeedback() {
        return repo.findAll();
    }
}
