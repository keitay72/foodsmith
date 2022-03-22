import React from "react";
import "./ingModal.css";
import logo from "../../food.ico";
import { AiFillCloseCircle } from "react-icons/ai";

const IngModal = ({ handleModal }) => {
  return (
    <div className="modal-bg">
      <div className="ing-modal">
        <header className="ing-modal__header">
          <img className="ing-modal__header-logo" src={logo} alt="chef logo" />
          <h1 className="ing-modal__header-title">FoodSmith</h1>
          <AiFillCloseCircle
            className="ing-modal__header-icon"
            onClick={handleModal}
          />
        </header>
      </div>
    </div>
  );
};

export default IngModal;
