import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const CategoryItem = ({ category }) => {
  return (
    <Link
      to={`/categories/${category.name}`}
      className="text-center category-link hover:scale-110"
    >
      <div className="">
        <img
          src={category.image}
          alt={category.name}
          className="category-img rounded object-cover  mb-4"
        />
      </div>
      <div className="font-bold">{category.name}</div>
    </Link>
  );
};

export default CategoryItem;
