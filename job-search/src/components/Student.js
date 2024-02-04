import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg.avif";
import "../styles/Home.css";
import { useLocation } from "react-router-dom";
import EmpNavbar from "../components/Empnavbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Student(){
     const [data,setdata]=useState({"name":"XXX","email":"XXX","degree":"XXXX","branch":"XXXX","institution":"XXXXX","skills":"XXXXX","idx":"XXXX"});
     const location=useLocation();
     const history=useHistory();

     const d=location.state;
    function onLoad(){
    
  fetch("http://127.0.0.1:8080/getstudata/"+d.user,
  {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
     
  }
).then((res) => res.json()).then((data) => { setdata(data) });
}
    if(data["name"]==="XXX"){
      onLoad();
    }

    function applications(){
      history.push({
        pathname:"/stuapp",
        state:{"id": data['idx']}

      });
    }
    function job(){
      history.push({
        pathname:"/stujobs",
        state:{"id": data['idx']}
      }
  
      );
    }

    function update(){
      history.push({
        pathname:"/stuup",
        state:{"stuid":data['idx'],"name":data["name"],"degree":data["degree"],"branch":data["branch"],"mail":data["email"],"institution":data["institution"],"skills":data["skills"]}
      });
    }
        
    
    
    return(
      <div>
        <EmpNavbar/>
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1 >Student Portal</h1>
          <h2 style={{color:"white"}}>Student Name: {data["name"]}</h2>

          <h2 style={{color:"white"}}>Student ID: {data["idx"]}</h2>
          
          <h2 style={{color:"white"}}>Degree: {data["degree"]} </h2>
          
          <h2 style={{color:"white"}}>Branch: {data["branch"]}</h2>



          <h2 style={{color:"white"}}>Institution: {data["institution"]}</h2>

          <h2 style={{color:"white"}}>Registered Email: {data["email"]}</h2>

          <h2 style={{color:"white"}}>Skills: {data["skills"]}</h2>

          <button style={{color:"white", fontSize:"15px"}} onClick={job}>JOBS</button>

          <button style={{color:"white",fontSize:"15px", width:"300px"}} onClick={applications}>SUBMITTED APPLICATIONS</button>

          <button style={{color:"white",fontSize:"15px"}} onClick={update}>UPDATE</button>
        </div>
      </div>
      </div>
    );
}

export default Student;