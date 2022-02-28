import React from "react";
import RecipeNutritionItem from "./RecipeNutritionItem";

const ProductNutrition = ({ nutrition }) => {
  const { ENERC_KCAL, FAT, FIBTG, PROCNT, SUGAR, CA, CHOCDF, CHOLE } =
    nutrition;

  const items = [ENERC_KCAL, FAT, FIBTG, PROCNT, SUGAR, CA, CHOCDF, CHOLE];

  return (
    <div className="mt-2">
      <h4>NUTRITION</h4>
      <div className="grid grid-cols-4 md:grid-cols-8">
        {items.map((item, index) => (
          <RecipeNutritionItem
            key={index}
            itemName={item.label}
            itemQuantity={item.quantity.toFixed(2)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductNutrition;
