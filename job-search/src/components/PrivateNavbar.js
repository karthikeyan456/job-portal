import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function StuNavbar() {
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
        <Link to="/"> HOME </Link>
        <Link to="/jobs"> JOBS </Link>
        <Link to="/About">ABOUT</Link>
        <Link to="/">LOGOUT</Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default StuNavbar;