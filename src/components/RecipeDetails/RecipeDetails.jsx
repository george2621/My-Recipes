import React, { useState, useEffect } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { BsFillTagFill } from "react-icons/bs";
import RecipeNutrition from "./RecipesNutrition";
import RecipeIngredients from "./RecipeIngredients";
import RecipeFavButton from "./RecipeFavButton";
import Loading from "../Loading/Loading";

const ProductDetails = ({ uri }) => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://api.edamam.com/api/recipes/v2/${uri}?app_id=77aa9220&app_key=0308e0fb57a38dfce56f6cdff2845a7a&type=public`;

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
  } else if (error) {
    return <h2>{error}</h2>;
  } else
    return (
      <div className="mt-12 mb-4">
        <Breadcrumb
          recipeName={[recipe][0].recipe.label}
          className="mt-24 mb-4"
        />
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
            <div className="mt-2 line"></div>
            <div className="flex mt-2">
              <p className="meal-type">
                Meal Type <span>{[recipe][0].recipe.mealType} </span>
              </p>
              <p className="dish-type">
                &nbsp;Dish Type <span>{[recipe][0].recipe.dishType}</span>
              </p>
            </div>
            <div className="mt-2 line"></div>
            <RecipeNutrition nutrition={[recipe][0].recipe.totalNutrients} />
            <div className="mt-4 line"></div>
            <RecipeIngredients
              ingredients={[recipe][0].recipe.ingredientLines}
            />
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;
