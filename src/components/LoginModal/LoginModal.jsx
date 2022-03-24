import React from "react";
import "./loginModal.css";
import { useModal } from "../../contexts/ModalContext";

const LoginModal = () => {
  const { setShowLogin } = useModal();

  return (
    <div className="login-bg" onClick={() => setShowLogin(false)}>
      <div
        className="login-modal-container"
        onClick={(e) => e.stopPropagation()}>
        <form
          className="login-modal-form"
          action="submit"
          onSubmit={() => setShowLogin(false)}>
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
          <button className="login-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
