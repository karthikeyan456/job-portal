import React, { Component } from 'react';
import '../styles/Home.css';
import BannerImage from '../assets/bg.avif'
import {Link} from 'react-router-dom'
import EmpNavbar from '../components/Empnavbar';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function JobApplicationForm(){
    var today=new Date();
    let d=useLocation();
    let s=d.state;
    var today=new Date();
    var da=today.getDate()+"- "+today.getMonth()+1+"- "+today.getFullYear();
    function submitapplication(){
      fetch("http://127.0.0.1:8080/submitapplication", {
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
         appid:"0",
         jobid:s.jobid,
         studid:s.studid,
         appdate:da,
         status:"Submitted",
         empid:s.empid,
           
      }
      )
      }).then((res)=>{res.text()}).then((data)=>{console.log(data)});
  
      alert("!!Application Submitted Successfully!!");
    }
    return (
      <div className="container" style={{ backgroundImage: `url(${BannerImage})` }}>
      <EmpNavbar/>
      
      <div className="login-container">
        <h2 style={{textAlign:"center"}}>Job Application</h2>
        <h4 style={{color:"white"}}>Student ID: {s.studid}</h4>
        <h4 style={{color:"white"}}>Job ID: {s.jobid}</h4>
        <h4 style={{color:"white"}}>Application Date: {da}</h4>
        <h4 style={{color:"white",textAlign:"center"}}>Click submit to apply</h4>
        <button onClick={submitapplication}> SUBMIT </button>

       
          </div>
          </div>
        
         
    );
  
}

export default JobApplicationForm;

