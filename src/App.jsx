import "./App.css";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:name" element={<CategoryPage />} />
          <Route path="/recipe/:uri" element={<RecipeDetailsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
