import React from "react";
import Nav from "../components/Nav/Nav";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Footer from "../components/Footer/Footer";
import RecipesList from "../components/RecipesList/RecipesList";

const ShowRandom = () => {
  return (
    <>
      <Nav />
      <h1 className="px-5 mt-12 mb-4 text-5xl lg:px-20 md:px-10">
        Random Recipes
      </h1>
      <Breadcrumb pageName={"Show Random"} />
      <RecipesList selectedSort={"Random Recipes"} />
      <Footer />
    </>
  );
};

export default ShowRandom;
