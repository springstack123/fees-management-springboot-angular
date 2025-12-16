package com.studentfee.StudentFee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AdminLogin {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
private String emailid,password;
public AdminLogin() {
	super();
	// TODO Auto-generated constructor stub
}
public AdminLogin(String emailid, String password) {
	super();
	this.emailid = emailid;
	this.password = password;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
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


}
