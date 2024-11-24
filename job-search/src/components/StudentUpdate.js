import React, { useEffect,useState } from "react";
import '../styles/Login.css';
import BannerImage from '../assets/bg.avif';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";

function StudentUpdate(){
   

    let l=useLocation();
    let d=l.state;

    const [name, setName] = useState(d.name);
    const [email, setEmail] = useState(d.mail);
    //const [password, setPassword] = useState('');
    const [degree,setdegree]=useState(d.degree);
    const [branch,setbranch]=useState(d.branch);
    const [insti,setInsti]=useState(d.institution);
    const [skill,setskill]=useState(d.skill);
 

  

    function handleUpdate(e){
        e.preventDefault();
        fetch("http://127.0.0.1:8080/updatestudent",{
            method:"POST",
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(
              {
                name:name,
                email:email,
                degree:degree,
                branch:branch,
                institution:insti,
                skills:skill,
                idx:d.stuid,
                password:"",}
            )
          }).then((res)=>{res.text()}).then((data)=>{console.log(data)});
      
          alert("!!Updation Successful!!");

    }
    return(
        <div className="container" style={{ backgroundImage: `url(${BannerImage})` }}>
        
        <div className="login-container"> {/*Student Data Updation*/ }
        <h2>Update Student Details</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder={d.name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder={d.mail}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <div></div>
        <div>&nbsp;</div>
          
          <div className='form-group'>
          <label>Degree:</label>
          <input type="text" placeholder={d.degree} onChange={(e)=>setdegree(e.target.value)}></input>
      
          </div>
          <div className='form-group'>
          <label>Branch:</label>
          <input type="text" placeholder={d.branch} onChange={(e)=>setbranch(e.target.value)}></input>
          </div>
        </div>

        <div className="form-group">
          <label>Institution:</label>
          <input
            type="text"
            placeholder={d.institution}
            onChange={(e) => setInsti(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Skill Set:</label>
          <input type="text" onChange={(e)=>setskill(e.target.value)}></input>
          
        </div>
        
       
        
        
        <button type="submit" onClick={handleUpdate}>Register</button>
        
      </form>
    </div>
    </div>
       
      
    );
}

export default StudentUpdate;