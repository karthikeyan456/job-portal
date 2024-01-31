package com.example.job.jobportal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobRepository extends MongoRepository<Job,Integer>{

    
} 
