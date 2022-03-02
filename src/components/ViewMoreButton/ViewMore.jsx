import React from "react";

const ViewMore = ({ ViewMoreRecipes }) => {
  return (
    <div className="text-center mb-20">
      <button
        onClick={() => ViewMoreRecipes()}
        className="view-more bg-transparent text-blue-700 font-semibold py-2 px-12 border hover:border-transparent"
      >
        View More
      </button>
    </div>
  );
};

export default ViewMore;
