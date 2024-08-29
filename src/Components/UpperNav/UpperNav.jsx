import React from "react";
import "./UpperNav.css";
import img1 from "../Assets/LargeLogo/img1.gif";
import img3 from "../Assets/SquareImage/img3.jpg";

import { ReactComponent as LoginIcon } from "../Assets/smallIcon/userlogin.svg";
import { ReactComponent as SearchIcon } from "../Assets/smallIcon/searchLens.svg";
// import {ReactComponent as }

const UpperNav = () => {
  return (
    <div className="completenavbar">
    <div 
    className="uppernav"
    style={{
        backgroundImage: `url(${img3})`,  
        backgroundSize: 'cover',           
        backgroundPosition: 'center',      
        height: '50px',                   
        display: 'flex',                   
        alignItems: 'center',            
        padding: '0 20px',                
        color: 'white',                   
    }}
>
    <p>GET APP</p>
    <p>STORE</p>
    <p>GIFT CARD</p>
    <p>HELP</p>
</div>

      <div className="navbar1">
        <div className="nav1-logo">
          <img src={img1} alt="" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder='Try "Liquid Lipstick"' />
          <div className="serach-icon">
            <SearchIcon style={{ width: "24px", color: "#000" }} />
            <span className="search-text">Search</span>
          </div>
        </div>
        <div className="login-section">
          <div className="icon-wrapper">
            <LoginIcon
              style={{ width: "24px", height: "24px", color: "#000" }}
            />
          </div>
          <span className="login-text">Login/Register</span>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
