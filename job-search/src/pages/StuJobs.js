import React from "react";
import { useState } from "react";
import '../styles/Jobs.css'
import EmpNavbar from "../components/Empnavbar";
import { useLocation,useHistory,Link } from "react-router-dom/cjs/react-router-dom.min";
function Job(props){
    let history=useHistory();

    function applynow(){
        history.push({
            pathname:"/jobapplicationform",
            state:props
        }
            
        )
    }
    return (
    <div className="jobsItem">
      <div> </div>
      <h4> Employer :{props.name} </h4>
      <h4> Job ID: {props.jobid}</h4>
      <h4> Job Title: {props.title}</h4>
      <h4> Location: {props.location}</h4>
      <h4>Description: {props.description}</h4>
      <h4>Salary: {props.salary}</h4>
      <h4>Experience: {props.experience}</h4>
      <button id="apply-now" type="submit" onClick={applynow}>Apply Now</button>


      

    </div>
      );
}

function StuJobs(){
    const[data,setdata]=useState(null);
    let loc=useLocation();
    let d=loc.state;


    if(data==null){
        fetch("http://127.0.0.1:8080/fetchalljobs",
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
        <div><EmpNavbar /> <div><h2 style={{textAlign:"center", fontFamily:"cursive", fontSize:50}}>Job Listings</h2>
           
            {
                data && <div>

                    {data.map((i,j) =>
                    {   //console.log(data);
                        return(
                            <Job
                               name={i.name}
                               empid={i.empid}
                               jobid={i.jobid}
                               location={i.location}
                               description={i.jobdesc}
                               salary={i.sal}
                               experience={i.exp}
                               studid={d.id}
                               title={i.title}

                            /> 
                        );
                    })}
                     </div>
            }

         </div>
        </div>
    );


}

export default StuJobs;