package com.studentfee.StudentFee.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studentfee.StudentFee.model.Contact;

@Repository
@Qualifier("conRepo")
public interface ContactRepository extends JpaRepository<Contact, Long>{

}
