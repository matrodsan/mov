import "./Container.css";
import React from "react";

const Container = (props) => {
  const { children, customClass } = props;
  return <div className={`container ${customClass}`}>{children}</div>;
};

export default Container;
