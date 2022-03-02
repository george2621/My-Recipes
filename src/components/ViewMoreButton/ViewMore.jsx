import React from "react";

const ViewMore = ({ ViewMoreRecipes }) => {
  return (
    <div className="mb-20 text-center">
      <button
        onClick={() => ViewMoreRecipes()}
        className="px-12 py-2 font-semibold text-blue-700 bg-transparent border view-more hover:border-transparent"
      >
        View More
      </button>
    </div>
  );
};

export default ViewMore;
