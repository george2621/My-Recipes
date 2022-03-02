import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHeart } from "react-icons/ai";

const RecipeItem = ({ recipeName, recipeImage, recipeURI }) => {
  return (
    <div className=" item recipe-Item items-center hover:scale-110 mb-12">
      <Link to={`/recipe/${recipeURI}`} className="hover:text-blue-700">
        <img
          className="mx-auto rounded mb-4 recipe-img"
          src={recipeImage}
          alt={recipeName}
        />
        <div className="text-center mx-4 ">{recipeName}</div>
      </Link>
    </div>
  );
};

export default RecipeItem;
