import React, { useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import Loading from "../Loading/Loading.jsx";
import RecipeItem from "../RecipeItem/RecipeItem";
import ViewMore from "../ViewMoreButton/ViewMore.jsx";

const RecipesList = ({ selectedCategory, selectedFilter, selectedSort }) => {
  const [range, setRange] = useState(16);

  const ViewMoreRecipes = () => {
    setRange(range + 8);
  };

  console.log(process.env);
  let url = `https://api.edamam.com/search?q&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&cuisineType=${selectedCategory}&from=0&to=${range}`;

  if (selectedFilter) {
    url = `https://api.edamam.com/search?q=${selectedFilter}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&from=0&to=${range}`;
  }
  if (selectedSort === "Random Recipes") {
    url = `https://api.edamam.com/search?q=popular&app_id=${
      process.env.REACT_APP_APP_ID
    }&app_key=${process.env.REACT_APP_APP_KEY}&from=30&to=${30 + range}`;
  }
  if (selectedSort === "Latest Recipes") {
    url = `https://api.edamam.com/search?q=latest&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&from=0&to=${range}`;
  }

  console.log(selectedSort);

  const { data, error, loading } = useFetch(url, range);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <h2>{error}</h2>;
  } else
    return (
      <>
        <div className="grid grid-cols-1 px-5 mt-10 lg:px-20 md:px-10 recipes md:grid-cols-2 lg:grid-cols-4">
          {data.hits.map((recipe) => (
            <RecipeItem
              key={recipe.recipe.uri.slice(51)}
              recipeName={recipe.recipe.label}
              recipeImage={recipe.recipe.image}
              recipeURI={recipe.recipe.uri.slice(51)}
            />
          ))}
        </div>
        {data && <ViewMore ViewMoreRecipes={ViewMoreRecipes} />}
      </>
    );
};

export default RecipesList;
