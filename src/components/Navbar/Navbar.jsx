import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/food.ico";
import { RiLoginCircleFill, RiLogoutCircleLine } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { MdManageAccounts, MdSettings, MdUpload } from "react-icons/md";
import LoginSignupModal from "../LoginSignupModal/LoginSignupModal";
import { useModal } from "../../contexts/ModalContext";
import { useAuth } from "../../contexts/AuthContext";
import auth from "../../database/auth.json";
import UploadRecipeModal from "../UploadRecipeModal/UploadRecipeModal";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showRecipeUploadModal, setShowRecipeUploadModal] =
    React.useState(false);

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

  const handleClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleUploadRecipeModal = () => {
    setShowRecipeUploadModal(true);
    setShowMenu(false);
  };

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
          <>
            <BsPersonCircle className="profile-logo" onClick={handleClick} />
            {showMenu && (
              <div className="menu">
                <ul>
                  <li>
                    <MdManageAccounts className="menu-icon" />
                    Account
                  </li>
                  <li>
                    <MdSettings className="menu-icon" />
                    Settings
                  </li>
                  <li onClick={handleUploadRecipeModal}>
                    <MdUpload className="menu-icon" />
                    Upload Recipe
                  </li>
                  <li>
                    <RiLogoutCircleLine className="menu-icon" />
                    Sign out
                  </li>
                </ul>
              </div>
            )}
          </>
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
      {showRecipeUploadModal && <UploadRecipeModal />}
    </div>
  );
};

export default Navbar;
