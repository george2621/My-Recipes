import React, { useContext, useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import FavoritesContext from "../context/FavoritesContext";
import RecipeItem from "../components/RecipeItem/RecipeItem";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const [favoriteList, setFavoriteList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getFavorites() {
      try {
        const fetches = favorites.map(async (id) => {
          const response = await fetch(
            `https://api.edamam.com/api/recipes/v2/${id}?app_id=77aa9220&app_key=0308e0fb57a38dfce56f6cdff2845a7a&type=public`,
          );
          return await response.json();
        });

        const results = await Promise.all(fetches);
        setLoading(false);
        setFavoriteList(results);
        console.log(favoriteList);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    getFavorites();
  }, [favorites]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Faild to fetch data</h1>;
  }
  return (
    <>
      <Nav />
      <h1 className="px-5 mt-12 mb-4 text-5xl lg:px-20 md:px-10">
        Favorites Recipes
      </h1>
      <Breadcrumb pageName={"Favorites"} />
      {favoriteList.length > 0 ? (
        <div className="grid grid-cols-1 mt-10 recipes md:grid-cols-2 lg:grid-cols-4">
          {favoriteList.map((fav) => (
            <RecipeItem
              key={[fav][0].recipe.uri.slice(51)}
              recipeName={[fav][0].recipe.label}
              recipeImage={[fav][0].recipe.image}
              recipeURI={[fav][0].recipe.uri.slice(51)}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center main no-favorites">
          <h1>There is no favorites recipes...</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default FavoritesPage;
