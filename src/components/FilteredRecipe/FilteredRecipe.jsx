import React from "react";
import { filter } from "./filter";

const FilteredRecipe = ({ selectedFilter, handleFilter }) => {
  return (
    <div className="my-24 px-20 text-center">
      <h1 className="text-4xl mb-2">Recipes</h1>
      <h4 className="cooking font-bold mb-6">GET COOKING & SHARING</h4>
      <div className="flex flex-wrap justify-center items-center">
        <p className="mr-4">FILTER BY:</p>
        {filter.map((item, index) => (
          <button
            key={index}
            className={`filter-button hover:bg-blue-700 text-white font-bold py-1 px-4 mx-1 rounded my-2 ${
              selectedFilter === item ? "selected-category" : ""
            }`}
            onClick={() => handleFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilteredRecipe;
