import "./Trendings.css";
import loading from "../../assets/gif.gif";
import getTrendings from "../../api/getTrendings";
import React, { useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import MovieCard from "../../components/MovieCard/MovieCard";
import { HiTrendingUp } from "react-icons/hi";

const Trendings = () => {
  const [trendings, setTrendings] = useState({});

  useEffect(() => {
    getTrendings(setTrendings);
  }, []);

  return (
    <>
      <Container customClass="flex">
        <h2 className="trendings-title">
          <HiTrendingUp />
          Trendings
        </h2>
      </Container>
      <Container customClass="flex justified wraped end-padding">
        {trendings.length > 0 ? (
          trendings.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        ) : (
          <img src={loading} alt="Loading" />
        )}
      </Container>
    </>
  );
};

export default Trendings;
