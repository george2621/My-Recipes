import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import ShowAll from "../ShowAll/ShowAll.jsx";
import { categories } from "./ctegoriesList";

const CategoriesList = ({ length }) => {
  return (
    <div className="grid grid-cols-2 gap-3 px-5 my-10 lg:px-20 md:px-10 md:grid-cols-3 lg:grid-cols-6">
      {categories.slice(0, length).map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
      {length === 5 && <ShowAll />}
    </div>
  );
};

export default CategoriesList;
