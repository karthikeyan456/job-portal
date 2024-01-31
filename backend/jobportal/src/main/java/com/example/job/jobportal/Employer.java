
package com.example.job.jobportal;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "employer")
public class Employer {

    //Employer Details
    private String cname;
    private String cmail;
    private String location;
    private String description;
    private String password;
    @Id
    private String idx;

    public void setIdx(String id){
        idx=id;
    }
    
}
