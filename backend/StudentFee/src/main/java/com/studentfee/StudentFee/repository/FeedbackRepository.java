package com.studentfee.StudentFee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.studentfee.StudentFee.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
