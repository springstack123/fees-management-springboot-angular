package com.studentfee.StudentFee.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.studentfee.StudentFee.model.Contact;
import com.studentfee.StudentFee.repository.ContactRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/student_fee")
public class ContactController {

    @Autowired
    ContactRepository conRepo;

    @GetMapping("/contact")
    public ArrayList<Contact> contact() {
        return (ArrayList<Contact>) conRepo.findAll();
    }

    @PostMapping("/contact")
    public Contact savecontact(@RequestBody Contact c) {
        return conRepo.save(c);
    }
}
