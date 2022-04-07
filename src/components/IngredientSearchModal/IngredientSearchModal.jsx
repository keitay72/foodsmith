import React from "react";
import "./ingredientSearchModal.css";
import logo from "../../assets/food.ico";
import { AiFillCloseCircle } from "react-icons/ai";
import { useModal } from "../../contexts/ModalContext";
import { BsPlusSquareFill } from "react-icons/bs";

const IngredientSearchModal = () => {
  const { setShowModal } = useModal();

  const [searchIngredient, setIngredient] = React.useState("");
  const [ingredientsSearchList, setIngredientsSearchList] = React.useState([]);

  const handleIngredient = (e) => {
    e.preventDefault();

    setIngredient(e.target.value.toLowerCase());
  };

  const addToSearchList = (e) => {
    e.preventDefault();

    const newIngredients = [...ingredientsSearchList];

    if (!searchIngredient) {
      return;
    } else {
      newIngredients.push(searchIngredient);
    }

    if (ingredientsSearchList.includes(searchIngredient)) {
      e.target[0].setAttribute("placeholder", "Duplicate Ingredient");
      console.log(e.target[0]);
      // e.target[0].classList.add("duplicate-input");
      const element = document.getElementById(searchIngredient);
      element.parentNode.classList.add("keyword-duplicate");
      setTimeout(() => {
        e.target[0].removeAttribute("placeholder", "Duplicate Ingredient");
        element.parentNode.classList.remove("keyword-duplicate");
        // e.target[0].classList.remove("duplicate-input");
      }, 2000);
    }

    if (!ingredientsSearchList.includes(searchIngredient))
      setIngredientsSearchList(newIngredients);

    setIngredient("");
  };

  const handleRemoveIngredient = (food) => {
    const element = document.getElementById(food);

    const ingredient = element.innerText;

    const newIngredients = ingredientsSearchList.filter(
      (item) => item !== ingredient
    );

    setIngredientsSearchList(newIngredients);
  };

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
          <form
            className="ingredient-search-form"
            action="submit"
            onSubmit={addToSearchList}>
            <div className="ingredient-search-input-div">
              <input
                id="indredient"
                type="text"
                onChange={handleIngredient}
                value={searchIngredient}
              />
              <button className="ingredient-search-add-btn">
                <BsPlusSquareFill className="ingredient-search-add" />
              </button>
            </div>
            {console.log(searchIngredient)}
            {console.log(ingredientsSearchList)}
            <div className="ingredients-list-div">
              {ingredientsSearchList.length
                ? ingredientsSearchList.map((ingredient) => {
                    return (
                      <div className="ingredient-keyword-div" key={ingredient}>
                        <h4 className="ingredient-keyword" id={ingredient}>
                          {ingredient}
                        </h4>
                        <AiFillCloseCircle
                          className="ingredient-keyword-icon"
                          onClick={() => handleRemoveIngredient(ingredient)}
                        />
                      </div>
                    );
                  })
                : ""}
            </div>
            {/* This button styling is primarily in "loginSignup.css"
            Some addition styling for positioning is in "ingredientSearchModal.css" */}
            <button className="ingredient-search-btn" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IngredientSearchModal;
