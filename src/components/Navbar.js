import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import React from "react";


function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo}/>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/education"> Education </Link>
        <Link to="/experience"> Experience </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;
