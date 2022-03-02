import React from "react";
import Nav from "../components/Nav/Nav.jsx";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb.jsx";
import { useParams } from "react-router-dom";
import RecipesList from "../components/RecipesList/RecipesList.jsx";
import Footer from "../components/Footer/Footer.jsx";

const CategoryPage = () => {
  const { name } = useParams();

  return (
    <div>
      <Nav />
      <h1 className="px-10 mt-12 mb-4 text-5xl">{name} Food</h1>
      <Breadcrumb category={name} />
      <RecipesList category={name} />
      <Footer />
    </div>
  );
};

export default CategoryPage;
