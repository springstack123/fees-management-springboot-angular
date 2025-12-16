package com.studentfee.StudentFee.repository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studentfee.StudentFee.model.Feedback;
import com.studentfee.StudentFee.model.Payment;

@Repository
@Qualifier("payRepo")
public interface PaymentRepository extends JpaRepository<Payment, Long> {


	

}
