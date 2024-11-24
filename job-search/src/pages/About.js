import React from "react";
import MultiplePizzas from "../assets/bg.jpg";
import "../styles/About.css";
import Navbar from "../components/Navbar.js";
function About() {
  return (
    <div className="about">
      <Navbar />
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At Job search Portal, we're your compass to career success. Our mission is simple: connecting you with the perfect job and employers with the ideal candidates. With a user-friendly platform, personalized job recommendations, and a vibrant community, we're here to make your job search journey a breeze.
        </p>
      </div>
    </div>
  );
}

export default About;