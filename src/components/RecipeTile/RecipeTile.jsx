import React from "react";
import "./recipeTile.css";

const RecipeTile = ({ key, title, image, subtitle, course, category }) => {
  const capitalFirstLeter = (word) => {
    if (typeof word === "string") {
      return word.replace(/^\w/, (c) => c.toUpperCase());
    }
    return word;
  };

  return (
    <div className="recipe-tile" key={key}>
      <h5>{capitalFirstLeter(course)}</h5>
      <h3>{title}</h3>
      <img src={image} />
      <h3>{subtitle}</h3>
      <h3>{category}</h3>
    </div>
  );
};

export default RecipeTile;
