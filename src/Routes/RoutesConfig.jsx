//LIBS
import React from "react";
import { Route, Routes } from "react-router-dom";

//COMPONENTS
import App from "../App";
import Movie from "../pages/Movie/Movie";
import Search from "../pages/Search/Search";
import Trendings from "../pages/Trendings/Trendings";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Trendings />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
