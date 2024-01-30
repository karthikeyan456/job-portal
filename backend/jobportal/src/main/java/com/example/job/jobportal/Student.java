package com.example.job.jobportal;


import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "student")
public class Student {

   //Student Details
    private String name;
    private String email;
    private String degree;
    private String branch;
    private String institution;
    private String skills;
    private String password;
    private String idx;

    public void setIdx(String id){
        idx=id;
    }



}

