import React from "react";
import { Link } from "react-router-dom";

const ShowAll = () => {
  return (
    <Link
      to="/categories"
      className="text-center category-link hover:scale-110"
    >
      <div className="">
        <img src="img/view-all.jpg" alt="View All" className="mb-4 rounded" />
      </div>
      <div className="font-bold">View ALL</div>
    </Link>
  );
};

export default ShowAll;
