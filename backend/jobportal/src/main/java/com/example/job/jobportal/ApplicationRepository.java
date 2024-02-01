package com.example.job.jobportal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApplicationRepository extends MongoRepository<Application,String>{

    
} 
