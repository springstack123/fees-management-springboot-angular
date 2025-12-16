package com.studentfee.StudentFee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Register {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long id;
private String name,address,emailid,password,course;
public Register() { 
	super();
	// TODO Auto-generated constructor stub
}
public Register(String name, String address, String emailid, String password, String course) {
	super();
	this.name = name;
	this.address = address;
	this.emailid = emailid;
	this.password = password;
	this.course = course;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getCourse() {
	return course;
}
public void setCourse(String course) {
	this.course = course;
}

}
