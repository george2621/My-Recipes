import React, { useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import { categories } from "../CategoriesList/ctegories.js";
import RecipeItem from "../RecipeItem/RecipeItem";
import ViewMore from "../ViewMoreButton/ViewMore.jsx";

const RecipesList = ({ category, selectedFilter }) => {
  const [range, setRange] = useState(16);

  const ViewMoreRecipes = () => {
    setRange(range + 8);
    console.log(range);
  };

  let url = `https://api.edamam.com/search?q&app_id=77aa9220&app_key=0308e0fb57a38dfce56f6cdff2845a7a&cuisineType=${category}&from=0&to=${range}`;
  if (selectedFilter) {
    url = `https://api.edamam.com/search?q=${selectedFilter}&app_id=77aa9220&app_key=0308e0fb57a38dfce56f6cdff2845a7a&from=0&to=${range}`;
  }
  const { data, error, loading } = useFetch(url, range);

  if (loading) {
    return <h2>loading...</h2>;
  } else if (error) {
    return <h2>{error}</h2>;
  } else
    return (
      <>
        <div className="recipes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-10 px-20">
          {data.hits.map((recipe, index) => (
            <RecipeItem
              key={index}
              recipeName={recipe.recipe.label}
              recipeImage={recipe.recipe.image}
              recipeURI={recipe.recipe.uri.slice(51)}
            />
          ))}
        </div>
        {(selectedFilter || category) && (
          <ViewMore ViewMoreRecipes={ViewMoreRecipes} />
        )}
      </>
    );
};

export default RecipesList;