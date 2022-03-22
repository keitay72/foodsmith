import React from "react";
import "./ingModal.css";
import logo from "../../food.ico";
import { AiFillCloseCircle } from "react-icons/ai";
// import { useModalUpdate } from "../../contexts/ModalContext";

const IngModal = ({ handleModal }) => {
  // const handleModal = useModalUpdate();
  return (
    <div className="modal-bg" onClick={handleModal}>
      <div className="ing-modal" onClick={(e) => e.stopPropagation()}>
        <header className="ing-modal__header">
          <img className="ing-modal__header-logo" src={logo} alt="chef logo" />
          <h1 className="ing-modal__header-title">FoodSmith</h1>
          <AiFillCloseCircle
            className="ing-modal__header-icon"
            onClick={handleModal}
          />
        </header>
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default IngModal;
