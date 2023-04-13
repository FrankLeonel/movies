import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default RouteApp;
