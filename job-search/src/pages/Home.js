import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg.avif";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Job's Search Portal</h1>
        <p> FIND YOUR DREAMS JOB</p>
        <Link to="/Jobs">
          <button> SEARCH JOB </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;