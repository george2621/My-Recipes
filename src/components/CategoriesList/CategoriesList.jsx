import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import ShowAll from "../ShowAll/ShowAll.jsx";
import { categories } from "./ctegories";

const CategoriesList = ({ length }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-20 px-10">
      {categories.slice(0, length).map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
      {length === 5 && <ShowAll />}
    </div>
  );
};

export default CategoriesList;
