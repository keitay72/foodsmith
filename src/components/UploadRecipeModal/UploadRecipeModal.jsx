import React, { useState } from "react";
import "./uploadRecipeModal.css";

const UploadRecipeModal = ({ setShowRecipeUploadModal }) => {
  const initialState = {
    title: "",
    subtitle: "",
    description: "",
    ingredients: [],
    directions: [],
    controlledInputIngredient: "",
    controlledInputDirection: "",
  };

  const [previewRecipe, setPreviewRecipe] = React.useState(initialState);

  const titleInputRef = React.useRef(null);
  const addIngredientRef = React.useRef(null);
  const addDirectionRef = React.useRef(null);

  React.useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const handleIngredientInput = (e) => {
    setPreviewRecipe((prev) => {
      return { ...prev, controlledInputIngredient: e.target.value };
    });
  };

  const handleDirectionInput = (e) => {
    setPreviewRecipe((prev) => {
      return { ...prev, controlledInputDirection: e.target.value };
    });
  };

  const handlePreviewRecipe = (e, key) => {
    setPreviewRecipe((prev) => {
      return { ...prev, [key]: e.target.value };
    });
  };

  const handlePreviewRecipeArray = (key) => {
    switch (key) {
      case "ingredients":
        if (previewRecipe.controlledInputIngredient) {
          setPreviewRecipe((prev) => {
            return {
              ...prev,
              [key]: [...prev[key], prev.controlledInputIngredient],
            };
          });
          setPreviewRecipe((prev) => {
            return { ...prev, controlledInputIngredient: "" };
          });
        }
        addIngredientRef.current.focus();
        break;
      case "directions":
        if (previewRecipe.controlledInputDirection) {
          setPreviewRecipe((prev) => {
            return {
              ...prev,
              [key]: [...prev[key], prev.controlledInputDirection],
            };
          });
          setPreviewRecipe((prev) => {
            return { ...prev, controlledInputDirection: "" };
          });
        }
        addDirectionRef.current.focus();
        break;
      default:
        break;
    }
  };

  const handleClearForm = () => {
    setPreviewRecipe(initialState);
  };

  const handleRemoveIngredientOrDirection = (index, list) => {
    switch (list) {
      case "ingredient":
        const copyIgredients = previewRecipe.ingredients.slice();
        copyIgredients.splice(index, 1);
        setPreviewRecipe((prev) => {
          return { ...prev, ingredients: copyIgredients };
        });
        break;
      case "direction":
        const copyDirections = previewRecipe.directions.slice();
        copyDirections.splice(index, 1);
        setPreviewRecipe((prev) => {
          return { ...prev, directions: copyDirections };
        });
        break;
      default:
        break;
    }
  };

  const handleRecipeUploadOnSubmit = (e) => {
    e.preventDefault();
    if (
      previewRecipe.title &&
      previewRecipe.subtitle &&
      previewRecipe.description &&
      previewRecipe.ingredients.length > 0 &&
      previewRecipe.directions.length > 0
    ) {
      //   console.log(previewRecipe);
      setShowRecipeUploadModal(false);
    }
  };

  const handleCloseModal = () => {
    setPreviewRecipe(initialState);
    setShowRecipeUploadModal(false);
  };

  const handleReorderList = () => {
    console.log("Clicked");
  };

  return (
    <div className="upload-recipe-modal-bg">
      <div className="upload-recipe-modal">
        <div className="upload-recipe-modal__title">
          Create Recipe
          <div className="close-container" onClick={handleCloseModal}>
            <div className="close close-1"></div>
            <div className="close close-2"></div>
          </div>
        </div>

        <div className="recipe">
          <div className="recipe__preview-container">
            {previewRecipe.title && <h2>{previewRecipe.title}</h2>}
            <br />
            {previewRecipe.subtitle && (
              <h3 style={{ fontWeight: "400", fontStyle: "italic" }}>
                {previewRecipe.subtitle}
              </h3>
            )}
            <br />
            {previewRecipe.description && <p>{previewRecipe.description}</p>}
            <br />
            {previewRecipe.ingredients.length > 0 && (
              <>
                <p>Ingredients:</p>
                <br />
                <ul className="mapped-ingredients">
                  {previewRecipe.ingredients.map((ingredient, i) => {
                    return (
                      <div className="mapped-div">
                        <button>Edit</button>
                        <button
                          onClick={() =>
                            handleRemoveIngredientOrDirection(i, "ingredient")
                          }>
                          Remove
                        </button>
                        <li key={i}>{ingredient}</li>
                      </div>
                    );
                  })}
                </ul>
              </>
            )}
            <br />
            {previewRecipe.directions.length > 0 && (
              <>
                <p>Directions:</p>
                <br />
                <ol className="mapped-directions">
                  {previewRecipe.directions.map((direction, i) => {
                    return (
                      <div className="mapped-div" key={i} draggable>
                        <div className="reorder-container">
                          <div className="reorder-bar"></div>
                          <div className="reorder-bar"></div>
                          <div className="reorder-bar"></div>
                        </div>
                        <button>Edit</button>
                        <button
                          onClick={() =>
                            handleRemoveIngredientOrDirection(i, "direction")
                          }>
                          Remove
                        </button>
                        <li key={i}>{direction}</li>
                      </div>
                    );
                  })}
                </ol>
              </>
            )}
            <br />
            {previewRecipe.title &&
              previewRecipe.subtitle &&
              previewRecipe.description &&
              previewRecipe.ingredients.length > 0 &&
              previewRecipe.directions.length > 0 && (
                <button className="preview-recipe-btn">Preview</button>
              )}
          </div>
          <div className="recipe__form-container">
            <form
              className="upload-recipe-form"
              action="submit"
              onSubmit={handleRecipeUploadOnSubmit}>
              <input
                className="title-input"
                type="text"
                placeholder="Title"
                value={previewRecipe.title}
                onChange={(e) => handlePreviewRecipe(e, "title")}
                ref={titleInputRef}
              />
              <input
                className="title-input"
                type="text"
                placeholder="Subtitle"
                value={previewRecipe.subtitle}
                onChange={(e) => handlePreviewRecipe(e, "subtitle")}
              />
              <textarea
                className="upload-recipe-textarea"
                placeholder="Description"
                value={previewRecipe.description}
                onChange={(e) => handlePreviewRecipe(e, "description")}
              />
              <div className="add-div">
                <input
                  className="list-input"
                  type="text"
                  placeholder="Ingredient"
                  value={previewRecipe.controlledInputIngredient}
                  onChange={handleIngredientInput}
                  ref={addIngredientRef}
                />
                <button
                  type="button"
                  onClick={() => handlePreviewRecipeArray("ingredients")}>
                  Add
                </button>
              </div>
              <div className="add-div">
                <input
                  className="list-input"
                  type="text"
                  placeholder="Directions"
                  value={previewRecipe.controlledInputDirection}
                  onChange={handleDirectionInput}
                  ref={addDirectionRef}
                />
                <button
                  type="button"
                  onClick={() => handlePreviewRecipeArray("directions")}>
                  Add
                </button>
              </div>
              <div className="clear-upload-div">
                <button
                  className="clear-form-btn"
                  type="button"
                  onClick={handleClearForm}>
                  Clear Form
                </button>
                <button className="upload-recipe-btn" type="submit">
                  Upload Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadRecipeModal;
