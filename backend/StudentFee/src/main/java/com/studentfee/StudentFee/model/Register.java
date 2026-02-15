package com.studentfee.StudentFee.model;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "register")
public class Register {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Personal Information
    private String fullName;

    private LocalDate dob;

    private String gender;

    // Contact Information
    private String address;

    private String phone;

    @Column(unique = true)
    private String emailid;

    private String password;

    // Academic Information
    private String course;

    private String previousSchool;

    private String qualification;

    private Double percentage;

    public Register() {
    }

    public Register(String fullName, LocalDate dob, String gender, String address,
                    String phone, String emailid, String password,
                    String course, String previousSchool,
                    String qualification, Double percentage) {

        this.fullName = fullName;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
        this.emailid = emailid;
        this.password = password;
        this.course = course;
        this.previousSchool = previousSchool;
        this.qualification = qualification;
        this.percentage = percentage;
    }

    // Getters and Setters

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getFullName() { return fullName; }

    public void setFullName(String fullName) { this.fullName = fullName; }

    public LocalDate getDob() { return dob; }

    public void setDob(LocalDate dob) { this.dob = dob; }

    public String getGender() { return gender; }

    public void setGender(String gender) { this.gender = gender; }

    public String getAddress() { return address; }

    public void setAddress(String address) { this.address = address; }

    public String getPhone() { return phone; }

    public void setPhone(String phone) { this.phone = phone; }

    public String getEmailid() { return emailid; }

    public void setEmailid(String emailid) { this.emailid = emailid; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public String getCourse() { return course; }

    public void setCourse(String course) { this.course = course; }

    public String getPreviousSchool() { return previousSchool; }

    public void setPreviousSchool(String previousSchool) { this.previousSchool = previousSchool; }

    public String getQualification() { return qualification; }

    public void setQualification(String qualification) { this.qualification = qualification; }

    public Double getPercentage() { return percentage; }

    public void setPercentage(Double percentage) { this.percentage = percentage; }
}
