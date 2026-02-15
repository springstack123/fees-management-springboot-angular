package com.studentfee.StudentFee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendRegistrationEmail(String toEmail, String name) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("🎉 Registration Successful - Fees Management System");

        message.setText(
                "Dear " + name + ",\n\n" +
                "Thank you for registering with Student Fees Management System.\n\n" +
                "You can now login and manage your fees online.\n\n" +
                "Best Regards,\n" +
                "Fees Management Team"
        );

        mailSender.send(message);
    }
}
