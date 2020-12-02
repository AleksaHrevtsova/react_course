import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink exact to="/" className="Navigation-link" activeClassName="Navigation-link-active">
        HOME
      </NavLink>
      <NavLink to="/categories" className="Navigation-link" activeClassName="Navigation-link-active">
        Categories
      </NavLink>
      <NavLink to="/movies" className="Navigation-link" activeClassName="Navigation-link-active">
        Movies
      </NavLink>
      <NavLink to="/not-found" className="Navigation-link" activeClassName="Navigation-link-active">
        NotFound
      </NavLink>
    </>
  );
};

export default Navigation;
