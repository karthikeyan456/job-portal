package com.example.job.jobportal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployerRepository extends MongoRepository<Employer,Integer>{

    
} 