import React from "react";
import "./search.css";
import IngModal from "../IngModal/IngModal";
import { GoSearch } from "react-icons/go";

const Search = ({ showModal, handleModal }) => {
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
      <h3 className="search__ingredient" onClick={handleModal}>
        Search by Ingredient
      </h3>
      {showModal && <IngModal handleModal={handleModal} />}
    </div>
  );
};

export default Search;
