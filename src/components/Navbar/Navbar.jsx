import React from "react";
import "./navbar.css";
import logo from "../../assets/food.ico";
import { RiLoginCircleFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="chef logo" />
      <div className="navbar__title">
        <h1 className="navbar__title-name">FoodSmith</h1>
        <p className="navbar__title-text">
          The best place to create and share recipes.
        </p>
      </div>
      <div className="navbar__login">
        <RiLoginCircleFill className="navbar__login-btn" />
        <p className="navbar__login-text">Login</p>
      </div>
    </div>
  );
};

export default Navbar;
