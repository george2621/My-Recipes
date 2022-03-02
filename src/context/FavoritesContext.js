import React, { useState } from "react";

const FavoritesContext = React.createContext({ favorites: [] });

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const isFavorites = (id) => {
    return favorites.includes(id);
  };

  const handleFavorites = (id) => {
    const newFavorites = favorites.filter((favorite) => favorite !== id);
    if (newFavorites.length === favorites.length) {
      setFavorites([...newFavorites, id]);
      console.log(favorites);
    } else {
      setFavorites(newFavorites);
    }
  };

  const value = {
    favorites,
    isFavorites,
    handleFavorites,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
