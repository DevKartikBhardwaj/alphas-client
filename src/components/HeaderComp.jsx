import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";
const HeaderComp = () => {
  return (
    <nav>
      <div id="navContainer">
        <div className="logo">LOGO</div>
        <div className="links">
          <Link to={"/"}>Home</Link>

          <Link to={"/information"}>Information</Link>

          <Link to={"/surveys"}>Surveys</Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComp;
