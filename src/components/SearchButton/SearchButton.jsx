import React from "react";
import "./SearchButton.css";

const SearchButton = (props) => {
  const { children } = props;
  return <button className="search-btn">{children}</button>;
};

export default SearchButton;
