import React from 'react';
import "./Nav.scss"
import Logo from "../../images/movie-illustration-logo-vector-design-film-178252125.jpeg";

const Nav = () => {
  return(
  <div className="nav">
    <div className="nav__left"><img src={Logo} alt="" className="nav__left__img"/></div>
    <div className="nav__middle"><input type="text" placeholder="Search for your favourite movies" /></div>
    <div className="nav__right"></div>
  </div>
)};

export default Nav;
