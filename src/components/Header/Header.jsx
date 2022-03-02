import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid items-center grid-cols-1 pt-12 lg:grid-cols-2">
      <div className="lg:px-20 md:px-10">
        <h1 className="mb-5 text-6xl">
          Huge selection of delicious recipe ideas
        </h1>
        <p className="mb-5 text-2xl font-light leading-8">
          Explore our huge selection of delicious recipe ideas including; easy
          desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta
          recipes, quick bakes, family-friendly meals and gluten-free recipes.
        </p>
        <div className="flex flex-col mt-5 lg:justify-start md:justify-center sm:flex-row">
          <Link
            to="/"
            className="px-5 py-3 m-3 font-bold text-center text-white bg-black rounded"
          >
            Explore Latest
          </Link>
          <Link
            to="/"
            className="px-5 py-3 m-3 font-bold text-center border rounded hover:bg-black hover:text-white text-light border-slate-500"
          >
            Show Random
          </Link>
        </div>
      </div>
      <div className="m-auto">
        <img
          src="/img/hero-image.png"
          width="607"
          height="510"
          className="object-contain p-5"
          loading="lazy"
          alt="cooking blog with NodeJS"
        />
      </div>
    </div>
  );
};

export default Header;
