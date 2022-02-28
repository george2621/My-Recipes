import React from "react";

const RecipeNutritionItem = ({ itemName, itemQuantity }) => {
  return (
    <div className="nutrition mr-2 mt-2 py-2 text-center ">
      <p className="text-sm">{itemName}</p>
      <p>{itemQuantity}</p>
    </div>
  );
};

export default RecipeNutritionItem;
