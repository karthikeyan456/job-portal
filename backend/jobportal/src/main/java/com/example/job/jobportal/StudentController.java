package com.example.job.jobportal;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
public class StudentController {
    
    @Autowired
    private StudentRepository stu;

    @Autowired
    private EmployerRepository emp;


    @CrossOrigin
    @PostMapping("/addstu") //To add a new student to the collection
    public String addStudent(@RequestBody Student st){
        List<Student> li=stu.findAll();
        for(Student s:li){
            if(s.getEmail().equals(st.getEmail())){
                return "Exists Already";
            }
        }
        
        stu.save(st);
        return "Added Successfully";


    }
    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody Login lg){
        Map<String,String> data=new HashMap<>();
        int f=0;
        List<Student> li=stu.findAll();
        for(Student s:li){
            if(s.getEmail().equals(lg.getUname()) && s.getPassword().equals(lg.getPass())){
                data.put("RES","OK");
                f=1;
            }
        }
        List<Employer> ls=emp.findAll();
        for(Employer e:ls){
            if(e.getCmail().equals(lg.getUname()) && e.getPassword().equals(lg.getPass()) && f==0){
                data.put("RES","OK");
            }
        }



        return new ResponseEntity<>(data,HttpStatus.OK);


        
    }
}
