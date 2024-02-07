package com.example.job.jobportal;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplicationController {

    @Autowired
    private StudentRepository stu;

    @Autowired
    private ApplicationRepository appli;

    @Autowired
    private JobRepository jobr;

    @Autowired
    private EmployerRepository empr;


    @CrossOrigin
    @PostMapping("/submitapplication")
    public String submitApplication(@RequestBody Application ap){

        List<Application> li=appli.findAll();
        int idx=li.size()+1;
        String ids="JPAPP"+Integer.toString(idx);
        ap.setAppid(ids);
        for(Application a:li){
            if(a.getStudid().equals(ap.getStudid()) &&  a.getJobid().equals(ap.getJobid())){
                return "APPLICATION ALREADY SUBMITTED";
            }
        }
        appli.save(ap);
        return "Added Application";
        
    }
    
    @CrossOrigin
    @GetMapping("/fetchapplications/{id}")
    public List<Map<String,String>> fetchApplications(@PathVariable("id") String id){
        List<Map<String,String>>ma=new ArrayList<>();

        List<Application> app=appli.findAll();
        List<Job> jobs=jobr.findAll();
        List<Employer> ems=empr.findAll();
        for(Application i:app){
            if(i.getStudid().equals(id)){
                 Map<String,String> mp=new HashMap<>();
                 mp.put("studid",id);
                 mp.put("appid",i.getAppid());
                 mp.put("jobid",i.getJobid());
                 
                 mp.put("status",i.getStatus());
                 mp.put("date",i.getAppdate());
                 for(Job j:jobs){
                    if(j.getJobid().equals(i.getJobid())){
                        mp.put("title",j.getTitle());
                        mp.put("empid",j.getEmpId());
                    }
                 }
                 for(Employer e:ems){
                    if(e.getIdx().equals(mp.get("empid"))){
                        mp.put("empname",e.getCname());
                    }
                 }
                 ma.add(mp);
            }
        }

        return ma;

        
    }

    @CrossOrigin
    @GetMapping("/fetchempapplications/{id}")
    public List<Map<String,String>> fetchEmpApplications(@PathVariable("id") String id){
        List<Map<String,String>>ma=new ArrayList<>();

        List<Application> app=appli.findAll();
        List<Job> jobs=jobr.findAll();
        List<Employer> ems=empr.findAll();
        List<Student> stud=stu.findAll();
        List<String> emps=new ArrayList<>();
        for(Application a: app){
            if(a.getEmpid().equals(id)){
                Map<String,String> mp=new HashMap<>();
                mp.put("jobid",a.getJobid());
                mp.put("status",a.getStatus());
                mp.put("apid",a.getAppid());
                for(Student s:stud){
                    if(s.getIdx().equals(a.getStudid())){
                        mp.put("name",s.getName());
                        mp.put("branch",s.getBranch());
                        mp.put("degree",s.getDegree());
                        mp.put("skills",s.getSkills());
                        mp.put("inst",s.getInstitution());
                        mp.put("mail",s.getEmail());
                        mp.put("studid",a.getStudid());
                    }
                }
                ma.add(mp);
            }
        }



        return ma;
    }

    @CrossOrigin
    @PostMapping("/updatestatus/{appid}/{newstatus}")
    public String updatestatus(@PathVariable("appid") String appid,@PathVariable("newstatus") String newstatus){
        List<Application> app=appli.findAll();
        for(Application a: app){
            if(a.getAppid().equals(appid)){
                a.setStatus(newstatus);
                appli.save(a);
            }
        }


        return "Status Updated";
    }
}
