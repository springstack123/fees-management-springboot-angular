package com.studentfee.StudentFee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Feedback {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long id;
private String name,emailid,feedbackdetails;
public Feedback() {
	super();
	// TODO Auto-generated constructor stub
}
public Feedback(String name, String emailid, String feedbackdetails) {
	super();
	this.name = name;
	this.emailid = emailid;
	this.feedbackdetails = feedbackdetails;
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
public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public String getFeedbackdetails() {
	return feedbackdetails;
}
public void setFeedbackdetails(String feedbackdetails) {
	this.feedbackdetails = feedbackdetails;
}

}
