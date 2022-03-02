import React from "react";
import { useParams } from "react-router";
import Nav from "../components/Nav/Nav.jsx";
import RecipesDetails from "../components/RecipeDetails/RecipeDetails.jsx";
import Footer from "../components/Footer/Footer.jsx";

const RecipeDetailsPage = () => {
  const { uri } = useParams();

  return (
    <>
      <Nav />
      <RecipesDetails uri={uri} />
      <Footer />
    </>
  );
};

export default RecipeDetailsPage;
