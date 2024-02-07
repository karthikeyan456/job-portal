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
     const [fi,setfi]=useState(null);
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

    function uploadres(){
          if(!fi){
             return;
          }
          const fdata=new FormData();
          fdata.append('file', fi);
          fetch("http://127.0.0.1:8080/uploadres/"+data["idx"], {
            method: 'POST',
            body: fdata
            }).then((res)=>{res.text()}).then((data)=>{console.log(data)});
            alert("Upload Successful")
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
    function gotofilter(){
      history.push({
        pathname:"/filter",
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
          <h1 >Job Seeker Portal</h1>
          <h3 style={{color:"white"}}>Name: {data["name"]}</h3>

          <h3 style={{color:"white"}}>ID: {data["idx"]}</h3>
          
          <h3 style={{color:"white"}}>Degree: {data["degree"]} </h3>
          
          <h3 style={{color:"white"}}>Branch: {data["branch"]}</h3>



          <h3 style={{color:"white"}}>Institution: {data["institution"]}</h3>

          <h3 style={{color:"white"}}>Registered Email: {data["email"]}</h3>

          <h3 style={{color:"white"}}>Skills: {data["skills"]}</h3>

          <h3 style={{color:"white"}}>Upload Resume:<input type="file"  onChange={(e)=>setfi(e.target.files[0])}/>  <button style={{color:"white", fontSize:"15px"}} onClick={uploadres}>UPLOAD</button> </h3>

          <button style={{color:"white", fontSize:"15px"}} onClick={job}>JOBS</button>

          <button style={{color:"white",fontSize:"15px", width:"300px"}} onClick={applications}>SUBMITTED APPLICATIONS</button>

          <button style={{color:"white",fontSize:"15px"}} onClick={update}>UPDATE</button>

          <button style={{color:"white",fontSize:"15px"}} onClick={gotofilter}>Filter Jobs</button>
        </div>
      </div>
      </div>
    );
}

export default Student;