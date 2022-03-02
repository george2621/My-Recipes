import React from "react";

const RecipeDescription = ({ mealType, dishType }) => {
  return (
    <div className="flex mt-2">
      <p className="meal-type">
        Meal Type <span>{mealType}</span>
      </p>
      <p className="dish-type">
        &nbsp;Dish Type <span>{dishType}</span>
      </p>
    </div>
  );
};

export default RecipeDescription;
