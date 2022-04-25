import React from "react";
import "./mainBody.css";
import RecipeTile from "../RecipeTile/RecipeTile";
import data from "../../database/db.json";

const MainBody = () => {
  const recipes = data.recipes;

  return (
    <div className="main-body">
      <div className="main-body-row">
        {recipes.map((recipe) => {
          return (
            <RecipeTile
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              subtitle={recipe.subtitle}
              course={recipe.course}
              category={recipe.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainBody;
