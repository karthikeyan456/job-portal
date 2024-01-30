import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg.avif";
import "../styles/Home.css";
import { useLocation } from "react-router-dom";
import EmpNavbar from "../components/Empnavbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Employer(){
     const [data,setdata]=useState({"cname":"XXX","location":"XXX","cmail":"XXXX","idx":"XXXX","about":"XXXXX"});
     const location=useLocation();
     const history=useHistory();

     const d=location.state;
    function onLoad(){
    
  fetch("http://127.0.0.1:8080/getempldata/"+d.user,
  {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
     
  }
).then((res) => res.json()).then((data) => { setdata(data) });
}
    if(data["cname"]==="XXX"){
      onLoad();
    }

    function addJob(){
      history.push({
        pathname:"/addjobs",
        state:{"empid":data['idx'],"loc":data["location"]}
      });
    }
        
    
    
    return(
      <div>
        <EmpNavbar />
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>Employer Portal</h1>
          <h2 style={{color:"white"}}>Employer Name: {data["cname"]}</h2>

          <h2 style={{color:"white"}}>Employer ID: {data["idx"]}</h2>
          
          <h2 style={{color:"white"}}>Locations: {data["location"]}</h2>

          <h2 style={{color:"white"}}>Registered Email: {data["cmail"]}</h2>

          <h2 style={{color:"white"}}>About: {data["about"]}</h2>
          
          
          <button onClick={addJob}> ADD JOB </button>
          
        </div>
      </div>
      </div>
    );
}

export default Employer;