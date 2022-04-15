import React from "react";
import "./search.css";
import IngredientSearchModal from "../IngredientSearchModal/IngredientSearchModal";
import { GoSearch } from "react-icons/go";
import { useModal } from "../../contexts/ModalContext";
import dbData from "../../database/db.json";

const Search = () => {
  const [data, setData] = React.useState(null);
  const [cards, setCards] = React.useState(0);
  const [start, setStart] = React.useState(0);

  const { showModal, setShowModal } = useModal();

  const carouselRef = React.useRef();

  React.useEffect(() => {
    setData(dbData.recipes);
  }, []);

  React.useEffect(() => {
    if (data) {
      carouselRef.current = data.slice(start, start + cards).map((recipe) => {
        return (
          <div className="recipe-card" key={recipe.id}>
            <div className="card-img-container">
              <img className="card-img" src={recipe.image} alt="image" />
            </div>
            <div className="card-text-container">
              <h4 className="card-text">{recipe.category}</h4>
            </div>
          </div>
        );
      });
    }
  }, [cards, start]);

  React.useEffect(() => {
    const handleCarousel = () => {
      const box = document.getElementsByClassName("card-container");
      const width = box[0].clientWidth;
      const height = box[0].clientHeight;
      // console.log("resized to; ", width, "x", height);
      const cardCount = Math.floor(width / 105);
      // console.log(cardCount);
      setCards(cardCount);
    };
    window.addEventListener("resize", handleCarousel);
    console.log(window);

    return () => window.addEventListener("resize", handleCarousel);
  });

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

  const handleLeftArrow = () => {
    if (start > 0) {
      setStart((prev) => prev - 1);
    }
    return;
  };

  const handleRightArrow = () => {
    // console.log(`start => ${start}`);
    // console.log(`cards => ${cards}`);
    // console.log(`cards.length ${data.length}`);
    if (start + cards < data.length - cards + 3) {
      setStart((prev) => prev + 1);
    }
    return;
  };

  return (
    <>
      <div className="search">
        <div className="search__container">
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
        </div>
        <div className="recipe-carousel">
          <div
            className="arrow-container left-arrow-container"
            onClick={handleLeftArrow}>
            <div className="arrow left-arrow" />
          </div>
          <div className="card-container">{data && carouselRef.current}</div>
          <div
            className="arrow-container right-arrow-container"
            onClick={handleRightArrow}>
            <div className="arrow right-arrow" />
          </div>
        </div>
        {showModal && <IngredientSearchModal />}
      </div>
    </>
  );
};

export default Search;
