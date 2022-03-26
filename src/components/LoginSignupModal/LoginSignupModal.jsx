import React from "react";
import "./loginSignupModal.css";
import { useModal } from "../../contexts/ModalContext";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

const LoginModal = () => {
  const { showLogin, showSignup, toggleLoginSignupModalStatesToFalse } =
    useModal();

  return (
    <div className="login-bg" onClick={toggleLoginSignupModalStatesToFalse}>
      {showLogin && !showSignup ? <Login /> : <Signup />}
    </div>
  );
};

export default LoginModal;
