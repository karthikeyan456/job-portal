import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  //const [selectedOption, setSelectedOption] = useState('option1');
 // const handleOptionChange = (event) => {
   // setSelectedOption(event.target.value);
  //};

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
        <Link to="/login"> JOBS </Link>
        <Link to="/login">ABOUT</Link>
        <Link to="/login"> LOGIN </Link>
        <Link to="/registration"> REGISTER 
        {/*<select value={selectedOption} onChange={handleOptionChange}>
             <option value="option1">Student</option>
             <option value="option2">Employee</option>
        </select>*/}
        </Link>

        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar;