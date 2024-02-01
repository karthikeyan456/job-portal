
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

@Document(collection = "application")
public class Application {
   
   @Id
   private String appid;
   private String jobid;
   private String empid;
   private String studid;
   private String appdate;
   private String status;

   
    
}
