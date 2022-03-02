import React from "react";

const RecipeNutritionItem = ({ itemName, itemQuantity }) => {
  return (
    <div className="py-2 mt-2 mr-2 text-center nutrition ">
      <p className="text-sm">{itemName}</p>
      <p>{itemQuantity}</p>
    </div>
  );
};

export default RecipeNutritionItem;
