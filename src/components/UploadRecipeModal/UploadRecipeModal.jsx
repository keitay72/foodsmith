import React from "react";
import "./uploadRecipeModal.css";

const UploadRecipeModal = () => {
  const [addIngredientValue, setAddIngredientValue] = React.useState("");
  const [addDirectionValue, setAddDirectionValue] = React.useState("");
  const [previewRecipe, setPreviewRecipe] = React.useState({
    title: "",
    subtitle: "",
    description: "",
    ingredients: [],
    directions: [],
  });

  const titleInputRef = React.useRef(null);
  const addIngredientRef = React.useRef(null);
  const addDirectionRef = React.useRef(null);

  React.useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const handleIngredientInput = (e) => {
    setAddIngredientValue(e.target.value);
  };

  const handleDirectionInput = (e) => {
    setAddDirectionValue(e.target.value);
  };

  const handlePreviewRecipe = (e, key) => {
    setPreviewRecipe((prev) => {
      return { ...prev, [key]: e.target.value };
    });
  };

  const handlePreviewRecipeArray = (key) => {
    switch (key) {
      case "ingredients":
        if (addIngredientValue) {
          setPreviewRecipe((prev) => {
            return { ...prev, [key]: [...prev[key], addIngredientValue] };
          });
          setAddIngredientValue("");
        }
        addIngredientRef.current.focus();
        break;
      case "directions":
        if (addDirectionValue) {
          setPreviewRecipe((prev) => {
            return { ...prev, [key]: [...prev[key], addDirectionValue] };
          });
          setAddDirectionValue("");
        }
        addDirectionRef.current.focus();
        break;
      default:
        break;
    }
  };

  const handleUploadRecipe = () => {
    console.log(previewRecipe);
  };

  const handleClearForm = () => {
    setPreviewRecipe({
      title: "",
      subtitle: "",
      description: "",
      ingredients: [],
      directions: [],
    });

    setAddIngredientValue("");
    setAddDirectionValue("");
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

  const handleReorderList = () => {
    console.log("Clicked");
  };

  return (
    <div className="upload-recipe-modal-bg">
      <div className="upload-recipe-modal">
        <div className="upload-recipe-modal__title">Create Recipe</div>
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
                        {/* <div className="reorder-container">
                          <div className="reorder-bar" />
                          <div className="reorder-bar" />
                          <div className="reorder-bar" />
                        </div> */}
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
                      //   <>
                      <div className="mapped-div">
                        <div
                          className="reorder-container"
                          onMouseDown={handleReorderList}>
                          <div className="reorder-bar" />
                          <div className="reorder-bar" />
                          <div className="reorder-bar" />
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
                      /* <li key={i} style={{ border: "1px solid black" }}>
                          <button>Edit</button>
                          <button>Remove</button>
                          {direction}
                        </li>
                      </> */
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
              onSubmit={(e) => e.preventDefault()}>
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
                  value={addIngredientValue}
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
                  value={addDirectionValue}
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
                <button
                  className="upload-recipe-btn"
                  onClick={handleUploadRecipe}>
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
