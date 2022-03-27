import React from "react";
import "./signup.css";
import { useModal } from "../../contexts/ModalContext";

const Signup = () => {
  const { handleSignup, handleLoginSignupSwitch } = useModal();
  return (
    <div
      className="signup-modal-container login-signup"
      onClick={(e) => e.stopPropagation()}>
      <div className="modal-title">Signup</div>
      <div className="form-container">
        <form
          className="signup-modal-form"
          action="submit"
          onSubmit={handleSignup}>
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            required
          />
          <label htmlFor="first-name">First Name</label>
          <input id="last-name" type="text" placeholder="Last Name" required />
          <label htmlFor="last-name">Last Name</label>
          <input id="username" type="text" placeholder="Username" required />
          <label htmlFor="username">Username</label>
          <input id="email" type="email" placeholder="Email" required />
          <label htmlFor="email">Email</label>
          <input
            id="phone-number"
            type="tel"
            placeholder="Phone Number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <small>Format: 123-456-7890</small>
          <label htmlFor="phone-number">Phone Number</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            required
          />
          <label htmlFor="confirm-password" required>
            Confirm Password
          </label>
          <button className="signup-btn login-signup-btn">Submit</button>
        </form>
      </div>
      <div className="signup-link-container">
        <span className="signup-text">Already have an account? </span>
        <span className="signup-link" onClick={handleLoginSignupSwitch}>
          Login here.
        </span>
      </div>
    </div>
  );
};

export default Signup;
