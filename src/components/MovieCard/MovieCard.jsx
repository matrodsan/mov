import "./MovieCard.css";
import React from "react";
import { FaTv } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const MovieCard = (props) => {
  const imgUrlBase = import.meta.env.VITE_TMDB_IMG_URL;
  const { movie } = props;
  return (
    <div className="movie-card">
      <img src={`${imgUrlBase}${movie.poster_path}`} alt="Movie" />
      <div>
        <h3>{movie.name}</h3>
        <p className="type">
          <FaTv /> <span>{movie.media_type}</span>
        </p>
        <p className="vote">
          <AiFillStar /> {movie.vote_average}
        </p>
        <button>Detalhes</button>
      </div>
    </div>
  );
};

export default MovieCard;
