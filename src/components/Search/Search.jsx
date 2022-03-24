import React from "react";
import "./search.css";
import IngredientSearchModal from "../IngredientSearchModal/IngredientSearchModal";
import { GoSearch } from "react-icons/go";
import { useModal } from "../../contexts/ModalContext";

const Search = () => {
  const { showModal, setShowModal } = useModal();

  React.useEffect(() => {
    const escapeKeyDownEvent = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    const listenForEscapeKeyPress = () =>
      window.addEventListener("keydown", escapeKeyDownEvent);

    if (showModal) listenForEscapeKeyPress();

    // This return removes the event listener to prevent memory leak.
    return () => window.removeEventListener("keydown", escapeKeyDownEvent);
  }, [showModal]);

  return (
    <div className="search">
      <form
        className="search__form"
        action=""
        method=""
        onSubmit={(e) => e.preventDefault()}>
        <label className="search__form-label" htmlFor="search-input">
          Find a Recipe
        </label>
        <input
          className="search__form-input"
          type="text"
          id="search-input"
          name="search-input"
          placeholder="Find a Recipe"
        />
        <button className="search__form-btn">
          <GoSearch className="search__form-btn-icon" type="submit" />
        </button>
      </form>
      <h3 className="search__ingredient" onClick={() => setShowModal(true)}>
        Search by Ingredient
      </h3>
      {showModal && <IngredientSearchModal />}
    </div>
  );
};

export default Search;
