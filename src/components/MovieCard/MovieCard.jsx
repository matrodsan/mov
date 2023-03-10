import "./MovieCard.css";
import React from "react";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <img
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
        alt="Movie"
      />
      <div>
        <h3>The Last of Us e as macaquisses</h3>
        <p>Série</p>
        <p>avaliação</p>
        <button>Detalhes</button>
      </div>
    </div>
  );
};

export default MovieCard;
