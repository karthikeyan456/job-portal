package com.example.job.jobportal;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class JobController {
    
    @Autowired
    private JobRepository job;

    @Autowired
    private EmployerRepository emp;


   
    @CrossOrigin
    @PostMapping("/addjob")
    public String addJob(@RequestBody Job jobentry){
          List<Job> li=job.findAll();
          int idx=li.size()+1;
          String ids=Integer.toString(idx);
          String empid=jobentry.getEmpId();
          jobentry.setJobId(empid+ids);

          for(Job j:li){
            if(j.getJobid().equals(jobentry.getJobid())){
                return "Already Exist";
            }
          }
          job.save(jobentry);
          return "Added Successfully";
    }

    @CrossOrigin
    @GetMapping("/fetchempjobs/{empid}")
    public List<Map<String,String>> getJobById(@PathVariable("empid") String empid){
          List<Map<String,String>>ma=new ArrayList<>();

          List<Job> li=job.findAll();

          for(Job j:li){
            if(j.getEmpId().equals(empid)){
                Map<String,String> mp=new HashMap<>();
                mp.put("empid",j.getEmpId());
                mp.put("jobid",j.getJobid());
                mp.put("location",j.getLocation());
                mp.put("jobdesc",j.getJobdesc());
                mp.put("sal",j.getSal());
                mp.put("exp",j.getExp());
                mp.put("title",j.getTitle());
                ma.add(mp);
            }
          }


          return ma;
    }

    @CrossOrigin
    @PostMapping("/closejob/{jobid}")
    public String closeJob(@PathVariable("jobid") String jobid){
      List<Job> li=job.findAll();
      for(Job i:li){
        if(i.getJobid().equals(jobid)){
          i.setOpen("0");
          job.save(i);
          break;
        }
      }
      return "Job Applications Closed";
    }

    @CrossOrigin
    @GetMapping("/fetchalljobs")
    public List<Map<String,String>> getAllJobs(){
      List<Map<String,String>>ma=new ArrayList<>();
      List<Job> jl=job.findAll();
      List<Employer> el=emp.findAll();
     
      for(Job j:jl){
        if(j.getOpen().equals("1")){
          Map<String,String> mp=new HashMap<>();
          for(Employer i:el){
            
            if(i.getIdx().equals(j.getEmpId())){
                mp.put("name",i.getCname());
                mp.put("empid",i.getIdx());
            }

          }
          mp.put("jobid",j.getJobid());
          mp.put("location",j.getLocation());
          mp.put("jobdesc",j.getJobdesc());
          mp.put("sal",j.getSal());
          mp.put("exp",j.getExp());
          mp.put("title",j.getTitle());
          ma.add(mp);
        }

      }


      return ma;

      
    }

    @CrossOrigin
    @GetMapping("/filter/{l}/{sal}/{exp}")
    public  List<Map<String,String>> filter(@PathVariable("l") String l,@PathVariable("sal") String sal,@PathVariable("exp") String exp){
      List<Map<String,String>>ma=new ArrayList<>();
      List<Job> jl=job.findAll();
      List<Employer> el=emp.findAll();
      for(Job j:jl){
        if(j.getOpen().equals("1")){
          if(j.getExp().equals(exp) || j.getLocation().equals(l) || j.getSal().equals(sal)){
          Map<String,String> mp=new HashMap<>();
          for(Employer i:el){
            
            if(i.getIdx().equals(j.getEmpId())){
                mp.put("name",i.getCname());
                mp.put("empid",i.getIdx());
            }

          }
          mp.put("jobid",j.getJobid());
          mp.put("location",j.getLocation());
          mp.put("jobdesc",j.getJobdesc());
          mp.put("sal",j.getSal());
          mp.put("exp",j.getExp());
          mp.put("title",j.getTitle());
          ma.add(mp);
        }
      }

      }
      return ma;

      
    }
    
    


    
    
    
}