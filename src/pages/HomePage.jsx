import React, { useState } from "react";
import Nav from "../components/Nav/Nav.jsx";
import Header from "../components/Header/Header.jsx";
import CategoriesList from "../components/CategoriesList/CategoriesList.jsx";
import FilteredRecipe from "../components/FilteredRecipe/FilteredRecipe.jsx";
import RecipesList from "../components/RecipesList/RecipesList.jsx";

const HomePage = () => {
  const [selectedFilter, setSelectedFilter] = useState("POPULAR");

  const handleFilter = (filter) => {
    if (selectedFilter === filter) {
      setSelectedFilter("");
    } else {
      setSelectedFilter(filter);
    }
  };

  return (
    <div>
      <Nav />
      <Header />
      <CategoriesList length={5} />
      <FilteredRecipe
        selectedFilter={selectedFilter}
        handleFilter={handleFilter}
      />
      <RecipesList selectedFilter={selectedFilter} />
    </div>
  );
};

export default HomePage;
