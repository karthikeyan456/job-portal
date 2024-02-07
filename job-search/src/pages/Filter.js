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

function Filter(){
    let loc=useLocation();
    let d=loc.state;

    const[l,setloc]=useState("");
    const[sa,setsa]=useState("");
    const[exp,setexp]=useState("");
    const[fdata,setfdata]=useState(null);
    function filterJobs(){
        fetch("http://127.0.0.1:8080/filter/"+l+"/"+sa+"/"+exp,
        {            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
           
        }
      ).then((res) => res.json()).then((data) => { setfdata(data) });

    }


   

    return(
        <div><EmpNavbar /> <div><h2 style={{textAlign:"center", fontFamily:"cursive", fontSize:50}}>Filter Jobs</h2>
           <div >
                <div style={{justifyContent:"center",alignItems:"center",display:"flex"}} >
                <h3 style={{textAlign:"center", fontFamily:"cursive", fontSize:15}}>Filter Job Opportunities</h3>
                <div>&nbsp; &nbsp;</div>
                <input type="text" placeholder="Enter Location" onChange={(e)=>setloc(e.target.value)}/>
                <div>&nbsp; &nbsp;</div>
                <input type="text" placeholder="Enter Salary" onChange={(e)=>setsa(e.target.value)}/>
                <div>&nbsp; &nbsp;</div>
                <input type="text" placeholder="Enter Experienece" onChange={(e)=>setexp(e.target.value)}/>
                <br></br>
                
                
                
                </div>

                <center><button style={{"width":"47px"}} onClick={filterJobs}>Find </button></center>
                {
                fdata && <div> <h2 style={{textAlign:"center", fontFamily:"cursive", fontSize:30}}>Filter Results</h2>

                    {fdata.map((i,j) =>
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
       </div>
    );


}

export default Filter;