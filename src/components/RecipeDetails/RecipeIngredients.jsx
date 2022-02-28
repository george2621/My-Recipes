import React from "react";

const Ingredients = ({ ingredients }) => {
  return (
    <div className="mt-2">
      <h4>INGREDIENTS</h4>
      <ul className="mt-2">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
