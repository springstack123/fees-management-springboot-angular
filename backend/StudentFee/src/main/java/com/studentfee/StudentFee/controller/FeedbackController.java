package com.studentfee.StudentFee.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentfee.StudentFee.model.Feedback;
import com.studentfee.StudentFee.repository.FeedbackRepository;

@RestController
@RequestMapping("/student_fee/")
public class FeedbackController {
@Autowired
@Qualifier("feedRepo")
FeedbackRepository feedRepo;
@GetMapping("/feedback")
public ArrayList<Feedback> feedback()
{
	return (ArrayList<Feedback>)feedRepo.findAll();
	
}
@PostMapping("/feedback")
public Feedback savefeedback(@RequestBody Feedback f)
{
	return feedRepo.save(f);
} 
}
