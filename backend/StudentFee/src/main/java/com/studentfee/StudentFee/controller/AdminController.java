package com.studentfee.StudentFee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentfee.StudentFee.model.AdminLogin;
import com.studentfee.StudentFee.model.Register;
import com.studentfee.StudentFee.repository.AdminLoginRepository;
import com.studentfee.StudentFee.repository.RegisterRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/student_fee/")
public class AdminController {
	@Autowired
	@Qualifier("admRepo")
	AdminLoginRepository admRepo;
	@GetMapping("/admin/{emailid}/{password}")
	public AdminLogin login(@PathVariable("emailid")String emailid,@PathVariable("password")String password)
	{
		return admRepo.findByEmailIdAndPassword(emailid, password);
	}
}
