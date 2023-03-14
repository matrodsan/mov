import "./NotFound.css";
import React from "react";
import { BiMessageError } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="not-found">
      <BiMessageError />
      <h1>Page not found</h1>
    </div>
  );
};

export default NotFound;
