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

import com.studentfee.StudentFee.model.Contact;
import com.studentfee.StudentFee.model.Payment;
import com.studentfee.StudentFee.repository.ContactRepository;
import com.studentfee.StudentFee.repository.FeedbackRepository;
import com.studentfee.StudentFee.repository.PaymentRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/student_fee/")
public class ContactController {
	@Autowired
	@Qualifier("conRepo")
	ContactRepository conRepo;
	@GetMapping("/contact")
	public ArrayList<Contact> Contact()
	{
		return (ArrayList<Contact>)conRepo.findAll();
		
	}
	@PostMapping("/contact")
	public Contact savecontact(@RequestBody Contact c)
	{
		return conRepo.save(c);
	} 
	}