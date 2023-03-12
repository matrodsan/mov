import "./Search.css";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchButton from "../SearchButton/SearchButton";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search a movie"
        value={searchValue}
        onChange={changeHandler}
      />
      <SearchButton query={searchValue}>
        <FaSearch />
      </SearchButton>
    </div>
  );
};

export default Search;
