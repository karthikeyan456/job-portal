package com.example.job.jobportal;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
public class EmployerController {
    
    @Autowired
    private EmployerRepository emp;


    @CrossOrigin
    @PostMapping("/addempl") //To add a new student to the collection
    public String addStudent(@RequestBody Employer st){
        List<Employer> li=emp.findAll();
        for(Employer s: li){
            if(s.getCmail().equals(st.getCmail())){
                return "Exists Already";
            }
        }
        
        emp.save(st);
        return "Added Successfully";


    }
}
