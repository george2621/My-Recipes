import React from "react";

const RecipeSearch = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className="max-w-sm mx-auto mb-10 overflow-hidden rounded">
      <div className="flex items-center py-2 border-b border-b-2 border-teal-500">
        <input
          className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          type="text"
          placeholder="Search for recipe"
          onChange={(e) => setSelectedFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default RecipeSearch;
