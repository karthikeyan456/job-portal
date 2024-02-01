package com.example.job.jobportal;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.lang.Integer;

public interface JobRepository extends MongoRepository<Job,String>{

    
} 
