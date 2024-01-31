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

    function addJob(){
      history.push({
        pathname:"/addjobs",
        state:{"empid":data['idx'],"loc":data["location"],"comp":d["cname"]}
      });
    }
    function job(){
      history.push({
        pathname:"/empjobs",
        state:{"id": data['idx']}
      }
  
      );
    }

    function update(){
      history.push({
        pathname:"/empup",
        state:{"empid":data['idx'],"loc":data["location"],"comp":data["cname"],"descp":data["about"],"mail":data["cmail"]}
      });
    }
        
    
    
    return(
      <div>
        <EmpNavbar/>
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>Student Portal</h1>
          <h3 style={{color:"white"}}>Student Name: {data["name"]}</h3>

          <h3 style={{color:"white"}}>Student ID: {data["idx"]}</h3>
          
          <h3 style={{color:"white"}}>Degree: {data["degree"]}</h3>

          <h3 style={{color:"white"}}>Branch: {data["branch"]}</h3>

          <h3 style={{color:"white"}}>Institution: {data["institution"]}</h3>

          <h3 style={{color:"white"}}>Registered Email: {data["email"]}</h3>

          <h3 style={{color:"white"}}>Skills: {data["skills"]}</h3>

          


          
          
         

          


          
        </div>
      </div>
      </div>
    );
}

export default Student;