import "./App.css";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import FavoritesPage from "./pages/FavoritesPage";
import { FavoriteContextProvider } from "./context/FavoritesContext";
import RandomRecipes from "./pages/RandomRecipes";
import LatestRecipes from "./pages/LatestRecipes";

function App() {
  return (
    <FavoriteContextProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:name" element={<CategoryPage />} />
            <Route path="/recipe/:uri" element={<RecipeDetailsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/random" element={<RandomRecipes />} />
            <Route path="/latest" element={<LatestRecipes />} />
          </Routes>
        </Router>
      </AuthProvider>
    </FavoriteContextProvider>
  );
}

export default App;
