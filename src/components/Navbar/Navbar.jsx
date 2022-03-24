import React from "react";
import "./navbar.css";
import logo from "../../assets/food.ico";
import { RiLoginCircleFill } from "react-icons/ri";
import LoginModal from "../LoginModal/LoginModal";
import { useModal } from "../../contexts/ModalContext";

const Navbar = () => {
  const { showLogin, setShowLogin } = useModal();

  React.useEffect(() => {
    const escapeKeyDownEvent = (e) => {
      if (e.key === "Escape") {
        setShowLogin(false);
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
      <img className="navbar__logo" src={logo} alt="chef logo" />
      <div className="navbar__title">
        <h1 className="navbar__title-name">FoodSmith</h1>
        <p className="navbar__title-text">
          The best place to create and share recipes.
        </p>
      </div>
      <div className="navbar__login">
        <RiLoginCircleFill
          className="navbar__login-btn"
          onClick={() => setShowLogin(true)}
        />
        <p className="navbar__login-text" onClick={() => setShowLogin(true)}>
          Login
        </p>
      </div>
      {showLogin && <LoginModal />}
    </div>
  );
};

export default Navbar;
