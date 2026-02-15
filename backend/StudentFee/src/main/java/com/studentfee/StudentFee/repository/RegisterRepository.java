package com.studentfee.StudentFee.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studentfee.StudentFee.model.Register;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Long> {

    Optional<Register> findByEmailid(String emailid);

    Optional<Register> findByEmailidAndPassword(String emailid, String password);
    
}
