
package com.example.job.jobportal;


import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "jobs")
public class Job {

    //Job Listing Details
    private String empid;
    @Id
    private String jobid;
    private String location;
    private String jobdesc;
    private String sal;
    private String exp;
    private String open;

    public void setJobId(String id){
        jobid=id;
    }

    public String getEmpId(){
        String emp=this.empid;
        return emp;
    }
    
}