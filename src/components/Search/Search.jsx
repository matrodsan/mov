import "./Search.css";
import React from "react";
import { FaSearch } from "react-icons/fa";
import SearchButton from "../SearchButton/SearchButton";

const Search = () => {
  return (
    <div className="search-bar">
      <input type="text" />
      <SearchButton>
        <FaSearch />
      </SearchButton>
    </div>
  );
};

export default Search;
