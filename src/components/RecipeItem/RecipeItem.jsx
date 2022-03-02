import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipeName, recipeImage, recipeURI }) => {
  return (
    <div className="items-center mb-12 item recipe-Item hover:scale-110">
      <Link to={`/recipe/${recipeURI}`} className="hover:text-blue-700">
        <img
          className="mx-auto mb-4 rounded recipe-img"
          src={recipeImage}
          alt={recipeName}
        />
        <div className="mx-4 text-center ">{recipeName}</div>
      </Link>
    </div>
  );
};

export default RecipeItem;
