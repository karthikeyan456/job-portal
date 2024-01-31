import React, { useState } from 'react';
import '../styles/Login.css';
import BannerImage from '../assets/bg.avif'
import {Link,useLocation} from 'react-router-dom';
import Select from 'react-select';


function AddJobs(){
  //Setting Locations
  const location=useLocation();
  const d=location.state;
  let l=d["loc"];
  l=l.trim();
  let locations=[];
  let arr=l.split(" ");
  arr.forEach(setloc);
  function setloc(v,i,arr){
    locations.push({label:v,value:v});
  }

  locations.push({label:"Remote",value:"Remote"});

  //Adding a new job
  const[employerid,setempid]=useState("");
  const[jobtitle,setjobtitle]=useState("");
  const[description,setjobdescription]=useState("");
  const[sal,setsal]=useState("");
  const[exp,setexp]=useState("");
  const[locs,setlocs]=useState("");
  let lo="";

  for(var i=0;i<locs.length;i++){
    lo+=locs[i].value+' ';
  }

  function addnewjob(e){
    e.preventDefault();
    if(employerid.length===0 || jobtitle.length===0 || description.length===0 || sal.length===0 || exp.length===0 || lo.length===0){
      
    }
    fetch("http://127.0.0.1:8080/addjob",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          empid: d["empid"],
          jobid: d["empid"],
          location: lo,
          jobdesc:description,
          sal:sal,
          exp:exp,
          open:"1",





        }
      )
    }).then((res)=>{res.text()}).then((data)=>{console.log(data)});

    alert("!!Job Posted Suceessfully!!");

  }


  
  return (
    <div className="container" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='Title'>
       
       
      </div>
    {
      <div className="login-container">
         <h2 style={{textAlign:"center"}}>Add a new job</h2>
      <form /*onSubmit={handleERegistration}*/>
        
        <div className="form-group">
          <label>Employer ID: {d["empid"]}</label>
          
        <div></div>
        </div>
        
        <div className="form-group">
          <label>Job Title :</label>
          <input type='text'
            onChange={(e)=>setjobtitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description :</label>
          <textarea
            rows="10"
            cols="42"
            required
            onChange={(e)=>setjobdescription(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label>Salary :</label>
          <input type='text'
            onChange={(e)=>setsal(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Experience :</label>
          <input type='text'
            onChange={(e)=>setexp(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Locations:</label>
          <Select
    
          isMulti
          name="colors"
          options={locations}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={setlocs}
          />
          
        </div>    
        <button type="submit" onClick={addnewjob} >Add Job </button>
      
      </form>
    </div>
    }
     
    </div>
  );
  
};

export default AddJobs;
