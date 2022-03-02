import React from "react";
import Login from "../Login/Login";

const Nav = () => {
  return (
    <div className="text-center">
      <nav className="main-nav flex justify-between  flex-wrap p-5 lg:px-40">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            My Recipes
          </span>
        </div>
        <div className="text-md items-center flex">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="/categories"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Categories
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Favorites
          </a>
        </div>
        <Login />
      </nav>
    </div>
  );
};

export default Nav;
