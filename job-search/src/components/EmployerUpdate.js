import React, { useEffect,useState } from "react";
import '../styles/Login.css';
import BannerImage from '../assets/bg.avif';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function EmployerUpdate(){
   

    let l=useLocation();
    let d=l.state;

    const[compname,setcompname]=useState(d.comp);
    const[descp,setdescp]=useState(d.descp);
    const[loc,setloc]=useState(d.loc);
    const[compmail,setcompmail]=useState(d.mail);
    

    const[closeid,setcid]=useState(" ");
    function closeJob(e){
        e.preventDefault();
        fetch("http://127.0.0.1:8080/closejob/"+closeid,{
            method:"POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        }
          
        ).then((res)=>{res.text()}).then((data)=>{console.log(data)});

        alert("Applications Closed");

    }

    function handleUpdate(e){
        e.preventDefault();
        fetch("http://127.0.0.1:8080/updateempl",{
            method:"POST",
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(
              {
                cname:compname,
                cmail:compmail,
                location:loc,
                description:descp,
                password:"",
                idx:d.empid,
              }
            )
          }).then((res)=>{res.text()}).then((data)=>{console.log(data)});
      
          alert("!!Updation Successful!!");

    }
    return(
        <div className="container" style={{ backgroundImage: `url(${BannerImage})` }}>
        
        <div className="login-container"> {/*Employer Data Updation*/ }
        <h2>Update Employer Details</h2>
        <form>
          <div className="form-group">
            <label>New Company Name:</label>
            <input
              type="text"
              placeholder={d.comp}
              onChange={(e) => setcompname(e.target.value)}
              
            />
          </div>
          <div className="form-group">
            <label>New Company Email:</label>
            <input
              type="email"
              placeholder={d.mail}
              onChange={(e) => setcompmail(e.target.value)}
              
            />
          <div></div>
          <div>&nbsp;</div>
            
            
            
          </div>
          
          <div className="form-group">
            <label>New Description about the company :</label>
            <textarea
              
              rows="10"
              cols="42"
              onChange={(e) => setdescp(e.target.value)}
              placeholder={d.descp}
              
            />
          </div>
  
          <div className="form-group">
            <label>Locations To Add:</label>
            <input
              type="text"
              
              onChange={(e) => setloc(e.target.value)}
              
            />
            
            
          </div>
          
          
          
          
          <button type="submit" onClick={handleUpdate}>Update Details</button>
          
    </form>
      </div>
      <div className="login-container">
             <h2>Close Job Applications</h2>
             <label>Enter Job ID</label>
             <input
              type="text"
              onChange={(e) => setcid(e.target.value)}
              
            />
            <button onClick={closeJob}>CLOSE APPLICATIONS</button>

        </div>

     
      
      </div>
       
      
    );
}

export default EmployerUpdate;