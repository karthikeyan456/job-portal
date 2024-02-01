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
public class StudentController {
    
    @Autowired
    private StudentRepository stu;

    @Autowired
    private EmployerRepository emp;


    @CrossOrigin
    @PostMapping("/addstu") //To add a new student to the collection
    public String addStudent(@RequestBody Student st){
        List<Student> li=stu.findAll();

        int idx=li.size()+1;//Generating the ID of the Student
        String ids=Integer.toString(idx);
        ids="JPSTU"+ids;
        st.setIdx(ids);

        for(Student s:li){
            if(s.getEmail().equals(st.getEmail())){ //Checking if the student already exists
                return "Exists Already";
            }
        }
        
        stu.save(st);//Adding student details to the collection
        return "Added Successfully";


    }

    //Login
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


    @CrossOrigin
    @GetMapping("/getstudata/{email}")
    public Map<String,String>getStudentDetails(@PathVariable("email") String email){
         Map<String,String> data=new HashMap<>();
         List<Student> li=stu.findAll();
         for(Student s: li){
            if(s.getEmail().equals(email)){//Checking if a student has already registered the credentials
                data.put("name",s.getName());
                data.put("email",s.getEmail());
                data.put("degree",s.getDegree());
                data.put("branch",s.getBranch());
                data.put("institution",s.getInstitution());
                data.put("skills",s.getSkills());
                data.put("idx",s.getIdx());
            }
        }
        return data;

         

    }

    @CrossOrigin
    @PostMapping("/updatestudent")
    public String updateEmployee(@RequestBody Student st){
        List<Student> li=stu.findAll();
        for(Student s:li){
            if(s.getIdx().equals(st.getIdx())){
                s.setBranch(st.getBranch());
                s.setDegree(st.getDegree());
                s.setInstitution(st.getInstitution());
                s.setEmail(st.getEmail());
                String sk=s.getSkills();
                sk=sk+" "+st.getSkills();
                s.setSkills(sk);
                stu.save(s);

            }
        }


        return "Updated";

    }
}
