import React from "react";
import { useState } from "react";
import '../styles/Jobs.css'
import EmpNavbar from "../components/Empnavbar.js";
import { useLocation,useHistory,Link } from "react-router-dom/cjs/react-router-dom.min.js";
function Application(props){
    let history=useHistory();

    
    return (
    <div className="jobsItem">
      <div> </div>
      <h4> Application ID :{props.appid} </h4>
      <h4> Student ID: {props.studid}</h4>
      <h4> Employer ID: {props.empid}</h4>
      <h4> Employer Name: {props.empname}</h4>
      <h4> Job ID: {props.jobid}</h4>
      <h4>Title: {props.title}</h4>
      <h4>Status: {props.status}</h4>
     
    


      

    </div>
      );
}

function StuApp(){
    const[data,setdata]=useState(null);
    let loc=useLocation();
    let d=loc.state;


    if(data==null){
        fetch("http://127.0.0.1:8080/fetchapplications/"+d.id,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
           
        }
      ).then((res) => res.json()).then((data) => { setdata(data) });

      console.log(data);
        
    }

    return(
        <div> <EmpNavbar />
            <div><h2 style={{textAlign:"center",fontFamily:"cursive",fontSize:50}}>Submitted Applications</h2>
           
            {
                data && <div>

                    {data.map((i,j) =>
                    {   //console.log(data);
                        return(
                            <Application
                              appid={i.appid}
                              empid={i.empid}
                              studid={i.studid}
                              status={i.status}
                              title={i.title}
                              date={i.date}
                              jobid={i.jobid}
                              empname={i.empname}

                            /> 
                        );
                    })}
                     </div>
            }

         </div>
        </div>
    );


}

export default StuApp;