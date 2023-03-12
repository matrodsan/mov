import React from "react";
import "./SearchButton.css";
import { useNavigate } from "react-router-dom";

const SearchButton = (props) => {
  const navigate = useNavigate();
  const { children, query } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`search/${query}`);
  };

  return (
    <button className="search-btn" onClick={submitHandler}>
      {children}
    </button>
  );
};

export default SearchButton;
