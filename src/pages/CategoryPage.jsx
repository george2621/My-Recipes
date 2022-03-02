import React from "react";
import Nav from "../components/Nav/Nav.jsx";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb.jsx";
import { useParams } from "react-router-dom";
import RecipesList from "../components/RecipesList/RecipesList.jsx";
import Footer from "../components/Footer/Footer.jsx";

const CategoryPage = () => {
  const { name } = useParams();

  return (
    <>
      <Nav />
      <h1 className="px-5 mt-12 mb-4 text-5xl lg:px-20 md:px-10">
        {name} Food
      </h1>
      <Breadcrumb category={name} />
      <RecipesList selectedCategory={name} />
      <Footer />
    </>
  );
};

export default CategoryPage;
