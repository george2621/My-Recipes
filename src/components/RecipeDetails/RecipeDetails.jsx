import React, { useState, useEffect } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { BsFillTagFill } from "react-icons/bs";
import RecipeNutrition from "./RecipesNutrition";
import RecipeIngredients from "./RecipeIngredients";
import Loading from "../Loading/Loading";
import RecipeFavButton from "../RecipeDetails/RecipeFavButton";
import Line from "./Line";
import RecipeDescription from "./RecipeDescription";

const ProductDetails = ({ uri }) => {
  const [recipe, setRecipe] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://api.edamam.com/api/recipes/v2/${uri}?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&type=public`;

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div className="mt-12 mb-4">
      <Breadcrumb pageName={[recipe][0].recipe.label} className="mt-24 mb-4" />
      <div className="grid grid-cols-1 px-8 mt-10 lg:grid-cols-3 lg:px-20">
        <div className="mx-auto">
          <img
            src={[recipe][0].recipe.image}
            alt={[recipe][0].recipe.label}
            className="img-details"
          />
          <RecipeFavButton uri={uri} />
        </div>
        <div className="col-span-2 lg:px-12">
          <p className="text-4xl">{[recipe][0].recipe.label}</p>
          <div className="flex items-center text-nav">
            <BsFillTagFill style={{ fontSize: "20px" }} />
            <p className="ml-2 text-xl ">{[recipe][0].recipe.cuisineType}</p>
          </div>
          <Line />
          <RecipeDescription
            mealType={[recipe][0].recipe.mealType}
            dishType={[recipe][0].recipe.dishType}
          />
          <Line />
          <RecipeNutrition nutrition={[recipe][0].recipe.totalNutrients} />
          <Line />
          <RecipeIngredients ingredients={[recipe][0].recipe.ingredientLines} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
