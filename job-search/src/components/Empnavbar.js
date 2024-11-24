import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";

function EmpNavbar(props) {
  const [openLinks, setOpenLinks] = useState(false);
  
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const history=useHistory();
  

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div><h3 style={{color:"white", paddingLeft:"30px", fontFamily:"cursive", fontSize:30}}>Job Search Portal</h3></div>
      </div>
      <div className="rightSide">
        <Link to="/">LOGOUT</Link>
      </div>
    </div>
  );
}

export default EmpNavbar;