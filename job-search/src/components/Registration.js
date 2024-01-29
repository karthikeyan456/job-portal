import React, { useState } from 'react';
import '../styles/Login.css';
import BannerImage from '../assets/bg.avif'
import {Link} from 'react-router-dom';
import Select from 'react-select';

const Registration = () => {
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

    let n=name;
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

  };

  return (
    <div className="container" style={{ backgroundImage: `url(${BannerImage})` }}>
          <div>
            

            
          </div>
      {role.value!=null && <div className='login-container'>
          <label>Role:</label>
          <Select 
        className="basic-single"
        classNamePrefix="select"
        onChange={setrole}
        
        name="Degree"
        options={roleoptions}
         />
    </div>}
    {role.value==="student" && <div className="login-container"> {/*Student Registration*/ }
      <h2>Register as Student</h2>
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <div></div>
        <div>&nbsp;</div>
          
          <div className='form-group'>
          <label>Degree:</label>
          <Select
        className="basic-single"
        classNamePrefix="select"
        onChange={setdegree}
        
        name="Degree"
        options={degoptions}
      />
          </div>
          <div className='form-group'>
          <label>Branch:</label>
          <Select
        className="basic-single"
        classNamePrefix="select"
        onChange={setbranch}
        
        name="Branch"
        options={broptions}
      />
          </div>
        </div>

        <div className="form-group">
          <label>Institution:</label>
          <input
            type="text"
            
            onChange={(e) => setInsti(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Skill Set:</label>
          <Select
    
    isMulti
    name="colors"
    options={skoptions}
    onChange={setskill}
    className="basic-multi-select"
    classNamePrefix="select"
  />
          
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        
        <button type="submit" onClick={handleRegistration}>Register</button>
        
      </form>
    </div>}
    



    {
      role.value==="employer" && <div className="login-container"> {/*Employer Registration*/ }
      <h2>Register as Employer</h2>
      <form onSubmit={handleERegistration}>
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            
            onChange={(e) => setcompname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Company Email:</label>
          <input
            type="email"
            
            onChange={(e) => setcompmail(e.target.value)}
            required
          />
        <div></div>
        <div>&nbsp;</div>
          
          
          
        </div>
        
        <div className="form-group">
          <label>Description about the company :</label>
          <textarea
            
            rows="10"
            cols="42"
            onChange={(e) => setdescp(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Locations:</label>
          <Select
    
          isMulti
          name="colors"
          options={locoptions}
          onChange={setloc}
          className="basic-multi-select"
          classNamePrefix="select"
          />
          
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
           
            onChange={(e) => setcpass(e.target.value)}
            required
          />
        </div>
        
        
        <button type="submit" onClick={handleERegistration}>Register</button>
        
      </form>
    </div>
    }
     
    </div>
  );
  
};

export default Registration;
