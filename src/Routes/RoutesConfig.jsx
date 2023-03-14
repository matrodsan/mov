//LIBS
import React from "react";
import { Route, Routes } from "react-router-dom";

//COMPONENTS
import App from "../App";
import Movie from "../pages/Movie/Movie";
import Movies from "../pages/Movies/Movies";
import NotFound from "../pages/NotFound/NotFound";
import Search from "../pages/Search/Search";
import Trendings from "../pages/Trendings/Trendings";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index element={<Trendings />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/:type/:id" element={<Movie />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
