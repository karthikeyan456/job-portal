import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg.avif";
import "../styles/Home.css";
import StuNavbar from "../components/StuNavbar";

function student(){
    return(
        <div>
        <StuNavbar />
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
           <h1>NITHISHKUMAR MV</h1> 
          <h1> Job's Search Portal</h1>
          <p> Find Your Dreams Job</p>
          <Link to="/Jobs">
            <button> SEARCH JOB </button>
          </Link>
        </div>
      </div>
      </div>
    );
}

export default student;