package com.example.job.jobportal;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;




@RestController
public class EmployerController {
    
    @Autowired
    private EmployerRepository emp;


    @CrossOrigin
    @PostMapping("/addempl") //To add a new Employer to the Employer Collection
    public String addEmployer(@RequestBody Employer st){

        List<Employer> li=emp.findAll();

        int idx=li.size()+1;//Generating the ID of the Employer
        String ids=Integer.toString(idx);
        ids="JPEMP"+ids;
        st.setIdx(ids);

        for(Employer s: li){
            if(s.getCmail().equals(st.getCmail())){//Checking if a employer has already registered the credentials
                return "Exists Already";
            }
        }
        
        //Add the new employer
        emp.save(st);
        return "Added Successfully";


    }

    @CrossOrigin
    @GetMapping("/getempldata/{email}")
    public Map<String,String>getEmployeeDetails(@PathVariable("email") String email){
         Map<String,String> data=new HashMap<>();
         List<Employer> li=emp.findAll();
         for(Employer s: li){
            if(s.getCmail().equals(email)){//Checking if a employer has already registered the credentials
                data.put("cname",s.getCname());
                data.put("cmail",s.getCmail());
                data.put("about",s.getDescription());
                data.put("location",s.getLocation());
                data.put("idx",s.getIdx());
            }
        }
        return data;

         

    }

    
    
    
}
