import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg.avif";
import "../styles/Home.css";
import EmpNavbar from "../components/Empnavbar";

function employer(){
    return(
      <div>
        <EmpNavbar />
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>NITHISHKUMAR MV</h1>
          <h1> Job's Search Portal</h1>
          <p> Opportunities don't happen</p>
          <Link to="/AddJobs">
            <button> ADD JOB </button>
          </Link>
        </div>
      </div>
      </div>
    );
}

export default employer;