import React from "react";
import "./uploadRecipeModal.css";

const UploadRecipeModal = () => {
  const [ingredientInputs, setIngredientsInput] = React.useState([]);
  const [addIngredientValue, setAddIngredientValue] = React.useState("");
  const [directionInputs, setDirectionInputs] = React.useState([]);
  const [addDirectionValue, setAddDirectionValue] = React.useState("");
  console.log(ingredientInputs);

  const handleAddIngredient = () => {
    if (!addIngredientValue) return;
    setIngredientsInput((prev) => [...prev, addIngredientValue]);
    setAddIngredientValue("");
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
  };

  const handleDirectionInput = (e) => {
    setAddDirectionValue(e.target.value);
  };

  const handleRemoveDirectionInput = (index) => {
    const array = [...directionInputs];
    array.splice(index, 1);
    setDirectionInputs(array);
  };

  return (
    <div className="upload-recipe-modal-bg">
      <div className="upload-recipe-modal">
        <div className="upload-recipe-modal__title">Create Recipe</div>
        <div className="upload-recipe-modal__form-container">
          <form
            className="upload-recipe-form"
            action="submit"
            onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Title" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"></textarea>
            <div className="add-div">
              <input
                type="text"
                placeholder="Ingredient"
                value={addIngredientValue}
                onChange={handleIngredientInput}
              />
              <button type="button" onClick={handleAddIngredient}>
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
                type="text"
                placeholder="Directions"
                value={addDirectionValue}
                onChange={handleDirectionInput}
              />
              <button type="button" onClick={handleAddDirection}>
                Add
              </button>
            </div>
            {directionInputs.length > 0 &&
              directionInputs.map((input, i) => (
                <div className="mapped-div" key={i}>
                  <p>{input}</p>
                  <button
                    type="button"
                    onClick={() => handleRemoveDirectionInput(i)}>
                    Remove
                  </button>
                </div>
              ))}
            <button className="upload-recipe-btn">Upload Recipe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadRecipeModal;
