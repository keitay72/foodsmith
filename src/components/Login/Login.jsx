import React from "react";
import "./login.css";
import { useModal } from "../../contexts/ModalContext";

const Login = () => {
  const { handleLogin, handleLoginSignupSwitch } = useModal();

  return (
    <div
      className="login-modal-container login-signup"
      onClick={(e) => e.stopPropagation()}>
      <div className="modal-title">Login</div>
      <div className="form-container">
        <form
          className="login-modal-form"
          action="submit"
          onSubmit={handleLogin}>
          <input
            id="username"
            type="text"
            placeholder="Username or Email"
            required
          />
          <label htmlFor="username">Username or Email</label>
          <input id="password" type="text" placeholder="Password" required />
          <label htmlFor="password">Password</label>
          <button className="signup-btn login-signup-btn">Submit</button>
        </form>
      </div>
      <div className="signup-link-container">
        <span className="signup-text">Don't have an account? </span>
        <span className="signup-link" onClick={handleLoginSignupSwitch}>
          Signup here.
        </span>
      </div>
    </div>
  );
};

export default Login;
