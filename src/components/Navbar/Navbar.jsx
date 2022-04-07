import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/food.ico";
import { RiLoginCircleFill } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import LoginSignupModal from "../LoginSignupModal/LoginSignupModal";
import { useModal } from "../../contexts/ModalContext";
import { useAuth } from "../../contexts/AuthContext";
import auth from "../../database/auth.json";

const Navbar = () => {
  const {
    showLogin,
    setShowLogin,
    signupFormData,
    loginFormData,
    toggleLoginSignupModalStatesToFalse,
  } = useModal();

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  React.useEffect(() => {
    if (
      loginFormData.username === auth.username &&
      loginFormData.password === auth.password
    ) {
      setIsLoggedIn(true);
    }
  }, [loginFormData]);

  // This useEffect is to listen for the "Escape" key to close the "LoginModal" component
  React.useEffect(() => {
    const escapeKeyDownEvent = (e) => {
      if (e.key === "Escape") {
        toggleLoginSignupModalStatesToFalse();
      }
    };

    const listenForEscapeKeyPress = () =>
      window.addEventListener("keydown", escapeKeyDownEvent);

    if (showLogin) listenForEscapeKeyPress();

    // This return removes the event listener to prevent memory leak.
    return () => window.removeEventListener("keydown", escapeKeyDownEvent);
  }, [showLogin]);

  return (
    <div className="navbar">
      {console.log(`Login Form Data =>`)}
      {console.log(loginFormData)}
      {console.log(`Signup Form Data =>`)}
      {console.log(signupFormData)}
      <img src={logo} alt="" className="navbar__logo" />
      <div className="navbar__title">
        <div className="navbar__title-name-div">
          <h1 className="navbar__title-name">FoodSmith</h1>
        </div>
        <div className="navbar__title-text-div">
          <h4 className="navbar__title-text">
            The best place to create and share recipes.
          </h4>
        </div>
      </div>
      <div className="navbar__login">
        {isLoggedIn ? (
          <BsPersonCircle className="profile-logo" />
        ) : (
          <>
            <RiLoginCircleFill
              className="navbar__login-btn"
              onClick={() => setShowLogin(true)}
            />
            <p
              className="navbar__login-text"
              onClick={() => setShowLogin(true)}>
              Login
            </p>
          </>
        )}
      </div>
      {showLogin && <LoginSignupModal />}
    </div>
  );
};

export default Navbar;
