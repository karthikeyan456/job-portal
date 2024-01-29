import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function EmpNavbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
      </div>
      <div className="rightSide">
        <Link to="/employer"> HOME </Link>
        <Link to="/addjobs"> ADD JOBS </Link>
        <Link to="/EmpAbout">ABOUT</Link>
        <Link to="/">LOGOUT</Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default EmpNavbar;