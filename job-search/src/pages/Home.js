import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg.avif";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Job's Search Portal</h1>
        <p> FIND YOUR DREAMS JOB</p>
        <Link to="/login">
          <button> SEARCH JOB </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Home;