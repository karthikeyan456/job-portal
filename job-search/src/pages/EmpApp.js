import React from "react";
import { useState } from "react";
import '../styles/Jobs.css'
import EmpNavbar from "../components/Empnavbar.js";
import { useLocation,useHistory,Link } from "react-router-dom/cjs/react-router-dom.min.js";
function Application(props){
    let history=useHistory();
    const [sta,setsta]=useState("");
    function upStatus(){
        fetch("http://127.0.0.1:8080/updatestatus/"+props.apid+"/"+sta,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
           
        }
      ).then((res) => res.text()).then((data) => { console.log(data) });
      alert("Status Updated");
    }
    return (
    <div className="jobsItem">
     
      <p> Application ID :{props.apid} </p>
      <p> Job ID: {props.jobid}</p>
      <p> Student Name: {props.name}</p>
      <p>Institution: {props.inst}</p>
      <p> Degree: {props.degree}</p>
      <p>Branch: {props.branch}</p>
      <p>Status: {props.status}</p>
      <p>Mail: {props.mail}</p>
      <a href={"http://127.0.0.1:8080/downloadres/"+props.stid}>Get Resume</a>
      <select name="Department" id="Route" onChange={(e) => setsta(e.target.value)}>
            <option value="" disabled selected>Select an option</option>
                                      
            <option value="In Review">In Review</option>
           
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
      </select>
      <button onClick={upStatus}>Update Status</button>
    


      

    </div>
      );
}

function EmpApp(){
    const[data,setdata]=useState(null);
    let loc=useLocation();
    let d=loc.state;


    if(data==null){
        fetch("http://127.0.0.1:8080/fetchempapplications/"+d.id,
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
        <div> <EmpNavbar/><div><h2 style={{textAlign:"center",fontFamily:"cursive",fontSize:50}}>Received Applications</h2>
           
            {
                data && <div>

                    {data.map((i,j) =>
                    {   //console.log(data);
                        return(
                            <Application
                              apid={i.apid}
                              skills={i.skills}
                              jobid={i.jobid}
                              inst={i.inst}
                              name={i.name}
                              degree={i.degree}
                              branch={i.branch}
                              status={i.status}
                              mail={i.mail}
                              stid={i.studid}

                              

                            /> 
                        );
                    })}
                     </div>
            }

         </div>
        </div>
    );


}

export default EmpApp;