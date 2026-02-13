package com.studentfee.StudentFee.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentfee.StudentFee.model.Register;
import com.studentfee.StudentFee.repository.RegisterRepository;

@RestController
@CrossOrigin(origins = {
	    "http://localhost:4200",
	    "https://your-frontend-url.onrender.com"
	})
@RequestMapping("/student_fee/")
public class RegisterController {

	@Autowired
	@Qualifier("regFee")
	RegisterRepository regFee;
	
	@GetMapping("/register")
	public ArrayList<Register> register()
	{
		return (ArrayList<Register>)regFee.findAll();
	}
	@PostMapping("/register")
	public Register handlepost(@RequestBody Register r)
	{
		return regFee.save(r);
		
	}
	@GetMapping("/register/{emailid}/{password}")
	public Register login(@PathVariable("emailid")String emailid,@PathVariable("password")String password)
	{
		return regFee.findByEmailIdAndPassword(emailid, password);
	}
	
} 














