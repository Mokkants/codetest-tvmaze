import { Button, styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  textDecoration: "underline",
};

const activeClassName = "underline";

const StyledNav = styled("nav")({
  display: "flex",
});

export const Navbar = () => {
  return (
    <StyledNav>
      <Button>
        <NavLink
          to="search"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Search
        </NavLink>
      </Button>

      <Button>
        <NavLink
          to="favorites"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Favorites
        </NavLink>
      </Button>
    </StyledNav>
  );
};
