import React from "react";
import { filters } from "./filter";

const FilteredRecipe = ({ selectedFilter, handleFilter }) => {
  return (
    <div className="px-20 mt-24 mb-10 text-center">
      <h1 className="mb-2 text-4xl">Recipes</h1>
      <h4 className="mb-6 font-bold cooking">GET COOKING & SHARING</h4>
      <div className="flex flex-wrap items-center justify-center">
        <p className="mr-4">FILTER BY:</p>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-button hover:bg-blue-700 text-white font-bold py-1 px-4 mx-1 rounded my-2 ${
              selectedFilter === filter.filterName ? "selected-category" : ""
            }`}
            onClick={() => handleFilter(filter.filterName)}
          >
            {filter.filterName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilteredRecipe;
