import "./Search.css";
import React, { useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import getSearch from "../../api/getSearch";
import MovieCard from "../../components/MovieCard/MovieCard";
import loading from "../../assets/gif.gif";

const Search = () => {
  const { query } = useParams();
  const [results, setResults] = useState({});

  useEffect(() => {
    getSearch(query, setResults);
  }, [query]);

  return (
    <>
      <Container customClass="flex justified">
        <h1 className="search-title">Search results for: <span>{query}</span></h1>
      </Container>
      <Container customClass="flex justified wraped end-padding">
        {results.length > 0 ? (
          results.map((movie, index) => <MovieCard key={index} movie={movie} />)
        ) : (
          <img src={loading} alt="loading" />
        )}
      </Container>
    </>
  );
};

export default Search;
