import React from "react";
import { useParams } from "react-router";
import Nav from "../components/Nav/Nav.jsx";
import RecipesDetails from "../components/RecipeDetails/RecipeDetails.jsx";

const RecipeDetailsPage = () => {
  const { uri } = useParams();

  return (
    <>
      <Nav />
      <RecipesDetails uri={uri} />
    </>
  );
};

export default RecipeDetailsPage;
