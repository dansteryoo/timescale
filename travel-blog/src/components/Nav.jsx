import React from "react";
import "../styles/Nav.scss";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__left">
        <span className="nav__left--title">Travelize</span>
        <p className="nav__left--description">My traveling experiences</p>
      </div>
      <div className="nav__right">
        <span className="nav__links--text">Home</span>
        <span className="nav__links--text">Blog</span>
        <button className="nav__links--button">About</button>
      </div>
    </div>
  );
};
