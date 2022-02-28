import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-1 items-center lg:grid-cols-2 pt-12">
      <div className="lg:px-20 md:px-10">
        <h1 className="text-6xl mb-5">
          Huge selection of delicious recipe ideas
        </h1>
        <p className="leading-8	font-light text-2xl mb-5">
          Explore our huge selection of delicious recipe ideas including; easy
          desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta
          recipes, quick bakes, family-friendly meals and gluten-free recipes.
        </p>
        <div className="flex lg:justify-start  md:justify-center flex-col sm:flex-row mt-5">
          <a
            href="/explore-latest"
            className="bg-black text-white font-bold py-3 px-5 m-3 rounded text-center"
          >
            Explore Latest
          </a>
          <a
            href="/explore-random"
            className="hover:bg-black hover:text-white text-light border border-slate-500 m-3 font-bold py-3 px-5 text-center rounded"
          >
            Show Random
          </a>
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
