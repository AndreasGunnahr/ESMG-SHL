import React, { useState } from "react";
import { Hamburger } from "components";
import { NavbarContainer, Logo, NavWrapper, NavLink } from "./style";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavbarContainer>
      <Logo to="/">SHL</Logo>
      <Hamburger open={open} setOpen={setOpen} />
      <NavWrapper>
        <NavLink to="/">Chart</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
