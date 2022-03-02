import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <Link
      to={`/categories/${category.name}`}
      className="text-center category-link hover:scale-110"
    >
      <div>
        <img
          src={category.image}
          alt={category.name}
          className="object-cover mb-4 rounded category-img"
        />
      </div>
      <div className="font-bold">{category.name}</div>
    </Link>
  );
};

export default CategoryItem;
