import React from "react";
import Nav from "../components/Nav/Nav.jsx";
import CategoriesList from "../components/CategoriesList/CategoriesList.jsx";
import { categories } from "../components/CategoriesList/ctegories.js";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb.jsx";

const CategoryPage = () => {
  return (
    <div>
      <Nav />
      <h1 className="text-5xl px-10 mt-12 mb-4">All Categories</h1>
      <Breadcrumb />
      <CategoriesList length={categories.length} />
    </div>
  );
};

export default CategoryPage;
