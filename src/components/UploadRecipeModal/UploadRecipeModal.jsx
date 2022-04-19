import React from "react";
import "./uploadRecipeModal.css";

const UploadRecipeModal = () => {
  const [ingredientInputs, setIngredientsInput] = React.useState([]);
  const [addIngredientValue, setAddIngredientValue] = React.useState("");
  const [directionInputs, setDirectionInputs] = React.useState([]);
  const [addDirectionValue, setAddDirectionValue] = React.useState("");
  const [recipeTitle, setRecipeTitle] = React.useState("");
  const [recipeSubtitle, setRecipeSubtitle] = React.useState("");
  const [recipeDescription, setRecipeDescription] = React.useState("");
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

  const handleAddIngredient = () => {
    if (!addIngredientValue) return;
    setIngredientsInput((prev) => [...prev, addIngredientValue]);
    setAddIngredientValue("");
    addIngredientRef.current.focus();
  };

  const handleIngredientInput = (e) => {
    setAddIngredientValue(e.target.value);
  };

  const handleRemoveIngredientInput = (index) => {
    const array = [...ingredientInputs];
    array.splice(index, 1);
    setIngredientsInput(array);
  };

  const handleAddDirection = () => {
    if (!addDirectionValue) return;
    setDirectionInputs((prev) => [...prev, addDirectionValue]);
    setAddDirectionValue("");
    addDirectionRef.current.focus();
  };

  const handleDirectionInput = (e) => {
    setAddDirectionValue(e.target.value);
  };

  const handleRemoveDirectionInput = (index) => {
    const array = [...directionInputs];
    array.splice(index, 1);
    setDirectionInputs(array);
  };

  const handlePreviewRecipe = (e, key) => {
    setPreviewRecipe((prev) => {
      return { ...prev, [key]: e.target.value };
    });
  };

  const handlePreviewRecipeArray = (key) => {
    if (key === "ingredients") {
      setPreviewRecipe((prev) => {
        console.log(prev[key]);
        return { ...prev, [key]: [...prev[key], addIngredientValue] };
      });
    }
    setPreviewRecipe((prev) => {
      console.log(prev[key]);
      return { ...prev, [key]: [...prev[key], addDirectionValue] };
    });
  };

  const previewSubtitle = () => {
    setPreviewRecipe((prev) => {
      return { ...prev, subtitle: recipeSubtitle };
    });
  };

  const previewDescription = () => {
    setPreviewRecipe((prev) => {
      return { ...prev, description: recipeDescription };
    });
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
  };

  return (
    <div className="upload-recipe-modal-bg">
      <div className="upload-recipe-modal">
        <div className="upload-recipe-modal__title">Create Recipe</div>
        <div className="recipe">
          <div className="recipe__preview-container">
            {previewRecipe.title && <h2>{previewRecipe.title}</h2>}
            {previewRecipe.subtitle && <div>{previewRecipe.subtitle}</div>}
            {previewRecipe.description && <p>{previewRecipe.description}</p>}
            {previewRecipe.ingredients.length > 0 && (
              <>
                <p>Ingredients</p>
                <ul>
                  {previewRecipe.ingredients.map((ingredient, i) => {
                    return <li key={i}>{ingredient}</li>;
                  })}
                </ul>
              </>
            )}
            {previewRecipe.directions.length > 0 && (
              <>
                <p>Directions</p>
                <ol>
                  {previewRecipe.directions.map((direction, i) => {
                    return <li key={i}>{direction}</li>;
                  })}
                </ol>
              </>
            )}
          </div>
          <div className="recipe__form-container">
            <form
              className="upload-recipe-form"
              action="submit"
              onSubmit={(e) => e.preventDefault()}>
              <div className="add-div">
                <input
                  type="text"
                  placeholder="Title"
                  value={previewRecipe.title}
                  onChange={(e) => handlePreviewRecipe(e, "title")}
                  ref={titleInputRef}
                />
                {/* <button type="button" onClick={previewTitle}>
                  Preview
                </button> */}
              </div>
              <div className="add-div">
                <input
                  type="text"
                  placeholder="Subtitle"
                  value={previewRecipe.subtitle}
                  onChange={(e) => handlePreviewRecipe(e, "subtitle")}
                />
                {/* <button type="button" onClick={previewSubtitle}>
                  Preview
                </button> */}
              </div>
              <div className="add-text-div">
                <textarea
                  placeholder="Description"
                  value={previewRecipe.description}
                  onChange={(e) => handlePreviewRecipe(e, "description")}
                />
                {/* <button type="button" onClick={previewDescription}>
                  Preview
                </button> */}
              </div>
              <div className="add-div">
                <input
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
              {ingredientInputs.length > 0 &&
                ingredientInputs.map((input, i) => (
                  <div className="mapped-div" key={i}>
                    <p>{input}</p>
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredientInput(i)}>
                      Remove
                    </button>
                  </div>
                ))}
              <div className="add-div">
                <input
                  ref={addDirectionRef}
                  type="text"
                  placeholder="Directions"
                  value={addDirectionValue}
                  onChange={handleDirectionInput}
                />
                <button
                  type="button"
                  onClick={() => handlePreviewRecipeArray("directions")}>
                  Add
                </button>
              </div>
              {directionInputs.length > 0 && (
                <ol>
                  {directionInputs.map((input, i) => (
                    <div className="mapped-div" key={i}>
                      <li>{input}</li>
                      <button
                        type="button"
                        onClick={() => handleRemoveDirectionInput(i)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </ol>
              )}
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
