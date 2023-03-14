import "./Movies.css";
import React from "react";
import Container from "../../components/Container/Container";
import { BiCameraMovie } from "react-icons/bi";

const Movies = () => {
  return (
    <Container customClass="flex justified">
      <div className="movies">
        <h2>
          <BiCameraMovie /> Movies
        </h2>
      </div>
    </Container>
  );
};

export default Movies;
