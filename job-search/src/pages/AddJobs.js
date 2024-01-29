import React, { useState } from 'react';
import '../styles/Login.css';
import BannerImage from '../assets/bg.avif'
import {Link} from 'react-router-dom';
import Select from 'react-select';

/*const Registration = () => {
  //Student
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [degree,setdegree]=useState('');
  const [branch,setbranch]=useState('');
  const [insti,setInsti]=useState('');
  const [skill,setskill]=useState([]);
  const [role,setrole]=useState({label:"student",value:"student"});
  const skoptions = [
    { label: "Java", value: "Java" },
    { label: "Springboot", value: "Springboot" },
    { label: "Data Analytics", value: "Data Analytics"},
    { label: "Computer Networks", value: "Networks"},
    { label: "Auto CADD", value: "Auto CADD"},
    { label: "Leadership", value: "Leadership"},
         
  ];

  const degoptions=[
    {label:"BE",value:"BE"},
    {label:"BTech",value:"BTech"},
    {label:"BS",value:"BS"},
    {label:"BsC",value:"BsC"},
    {label:"Diploma",value:"Diploma"},
  ];
  const roleoptions=[
    {label:"Student",value:"student"},
    {label:"Employer",value:"employer"},

  ]
  const broptions=[
    {label:"CSE",value:"CSE"},
    {label:"ECE",value:"ECE"},
    {label:"EEE",value:"EEE"},
    {label:"Data Scienece",value:"Data Science"},
    {label:"Mechanical",value:"Mechanical"},
    {label:"Civil",value:"Civil"},
  ];
  
  //Employer Registration

  const[compname,setcompname]=useState("");
  const[descp,setdescp]=useState("");
  const[loc,setloc]=useState("");
  const[cpass,setcpass]=useState("");
  const[compmail,setcompmail]=useState("");
 
  const locoptions=[
    {label:"Banglore",value:"Banglore"},
    {label:"Mumbai",value:"Mumbai"},
    {label:"Coimbatore",value:"Coimbatore"},
    {label:"Delhi",value:"Delhi"},
    {label:"Noida",value:"Noida"},
    {label:"Hyderabad",value:"Hyderabad"},
    {label:"Chennai",value:"Chennai"},

  ]
  const handleERegistration=(e)=>{
    e.preventDefault();
    let cn=compname;
    let cm=compmail;
    let cp=cpass;
    let lo='';
    for(var i=0;i<loc.length;i++){
      lo+=loc[i].value+' ';
    }
    let d=descp;

    //Registration
    fetch("http://127.0.0.1:8080/addempl",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          cname:cn,
          cmail:cm,
          location:lo,
          description:d,
          password:cp
        }
      )
    }).then((res)=>{res.text()}).then((data)=>{console.log(data)});

    alert("!!Registration Successful!!");
  }
  const handleRegistration = (e) => {
    e.preventDefault();
   
    /*console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Degree ', degree);
    console.log('Branch ', branch);
    console.log('Insti ', insti);
    console.log('skill ', skill);*/

    /*let n=name;
    let em=email;
    let pw=password;
    let deg=degree.value;
    let br=branch.value;
    let ins=insti;
    let sk=''
    
    //Concatenate Skills
    for(var i=0;i<skill.length;i++){
      sk+=skill[i].value+" ";
    }
    
    //Registration
    fetch("http://127.0.0.1:8080/addstu", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(
      {
       name:n,
       email:em,
       degree:deg,
       branch:br,
       institution:ins,
       skills:sk,
       password:pw,
         
    }
    )
    }).then((res)=>{res.text()}).then((data)=>{console.log(data)});

    alert("!!Registration Successful!!");

  };*/
function AddJobs(){
  return (
    <div className="container" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='Title'>
        <p>ADD JOB</p>
        <Link to="/Employer"> BACK </Link>
      </div>
    {
      <div className="login-container">
      <form /*onSubmit={handleERegistration}*/>
        <div className="form-group">
          <label>Job ID:</label>
          <input
            type="number" 
            required
          />
        </div>
        <div className="form-group">
          <label>Employer ID:</label>
          <input
            type="number"
            
            required
          />
        <div></div>
        </div>
        
        <div className="form-group">
          <label>Job Title :</label>
          <input type='text'
            
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description :</label>
          <textarea
            rows="10"
            cols="42"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Salary :</label>
          <input type='text'
            
            required
          />
        </div>
        
        <div className="form-group">
          <label>Experience :</label>
          <input type='text'
            
            required
          />
        </div>

        <div className="form-group">
          <label>Locations:</label>
          <Select
    
          isMulti
          name="colors"

          className="basic-multi-select"
          classNamePrefix="select"
          />
          
        </div>    
        <button type="submi" >Add Job </button>
      
      </form>
    </div>
    }
     
    </div>
  );
  
};

export default AddJobs;
