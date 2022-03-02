import React from "react";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="text-center">
      <nav className="flex flex-wrap justify-between p-5 main-nav lg:px-40">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <span className="text-xl font-semibold tracking-tight">
            My Recipes
          </span>
        </div>
        <div className="flex items-center text-md">
          <Link
            to="/"
            className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/"
            className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/categories"
            className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
          >
            Categories
          </Link>
          <Link
            to="/favorites"
            className="block mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
          >
            Favorites
          </Link>
        </div>
        <Login />
      </nav>
    </div>
  );
};

export default Nav;
