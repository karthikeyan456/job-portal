import React, { useState } from 'react';
import '../styles/Login.css';
import BannerImage from '../assets/bg.avif'
import {Link,useHistory} from 'react-router-dom'
import Select from 'react-select';
import Home from '../pages/Home';
import Navbar from './Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role,setrole]=useState({label:"Jobseeker",value:"student"});
  
  const history=useHistory();
  const roleoptions=[
    {label:"Job Seeker",value:"student"},
    {label:"Employer",value:"employer"},

  ]
  const [data, setData] = useState([{}]);

  
  const handleLogin = (e) => {
    e.preventDefault();
    var ro=role.value;
    fetch("http://127.0.0.1:8080/login",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    uname: email,
                    pass: password,
                    role:ro

                })
            }
        ).then((res) => res.json()).then((data) => { setData(data) });
    console.log(data[0]);
   

    if (data["RES"] === "OK" && ro==="student") {
      history.push({
          pathname: '/student',
          state: {'user':email}
        });
      }
    else if(data["RES"] === "OK" && ro==="employer"){
      history.push({
        pathname: '/employer',
        state: {'user':email}
      });
    }
    else{
      history.push("/login");
    }
  }
  return (
    <div className="container" style={{ backgroundImage: `url(${BannerImage})` }}> 
    <Navbar />
    <div className="login-container" >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Role:</label>
          <Select
        className="basic-single"
        classNamePrefix="select"
        onChange={setrole}
        
        name="Degree"
        options={roleoptions}
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

        <button type="submit" onClick={handleLogin}>Login</button>

      </form>
    </div>
    </div>
  );
};

export default Login;
