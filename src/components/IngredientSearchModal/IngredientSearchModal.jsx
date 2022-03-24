import React from "react";
import "./ingredientSearchModal.css";
import logo from "../../assets/food.ico";
import { AiFillCloseCircle } from "react-icons/ai";
import { useModal } from "../../contexts/ModalContext";

const IngredientSearchModal = () => {
  const { setShowModal } = useModal();
  return (
    <div className="modal-bg" onClick={() => setShowModal(false)}>
      <div className="ing-modal" onClick={(e) => e.stopPropagation()}>
        <header className="ing-modal__header">
          <img className="ing-modal__header-logo" src={logo} alt="chef logo" />
          <h1 className="ing-modal__header-title">FoodSmith</h1>
          <AiFillCloseCircle
            className="ing-modal__header-icon"
            onClick={() => setShowModal(false)}
          />
        </header>
        <div className="left"></div>
        <div className="right">
          3<sup>1</sup>&frasl;<sub>3</sub> Cups
          <br />3 1&frasl;3 Cups
          <br />
          Preheat oven to 300&deg;.
        </div>
      </div>
    </div>
  );
};

export default IngredientSearchModal;
