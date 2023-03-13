import "./Movie.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import getMovie from "../../api/getMovie";
import loading from "../../assets/gif.gif";

const Movie = () => {
  const { id, type } = useParams();
  const imgUrlBase = import.meta.env.VITE_TMDB_IMG_URL;
  const [movie, setMovie] = useState({});
  
  console.log(type)
  
  useEffect(() => {
    getMovie(id, type, setMovie);
  }, []);

  return (
    <Container customClass="flex aligned column end-padding">
      {movie ? (
        <div className="movie-info">
          <img src={`${imgUrlBase}${movie.poster_path}`} alt="Poster" />
          <h2>{movie.title}</h2>
          <p>Release: {movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      ) : (
        <img src={loading} alt="loading" />
      )}
    </Container>
  );
};

export default Movie;
