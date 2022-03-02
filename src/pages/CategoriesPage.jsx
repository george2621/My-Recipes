import React from "react";
import Nav from "../components/Nav/Nav.jsx";
import CategoriesList from "../components/CategoriesList/CategoriesList.jsx";
import { categories } from "../components/CategoriesList/ctegoriesList.js";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb.jsx";
import Footer from "../components/Footer/Footer.jsx";

const CategoryPage = () => {
  return (
    <div>
      <Nav />
      <h1 className="px-10 mt-12 mb-4 text-5xl">All Categories</h1>
      <Breadcrumb />
      <CategoriesList length={categories.length} />
      <Footer />
    </div>
  );
};

export default CategoryPage;
