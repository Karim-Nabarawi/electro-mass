import React from "react";

import { NavLink, useLocation } from "react-router-dom";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <li className="active">
          <NavLink to="/" activeClassName="active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/ABOUT" activeClassName="active">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/SERVICES" activeClassName="active">
            SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink to="/CONTACTS" activeClassName="active">
            CONTACTS
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: sticky;
  top: 0;
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 5rem;
  background: rgba(25, 25, 25, 0.5);
  z-index: 10;
  a {
    color: #c8b930;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    font-size: 24px;
    padding: 1.5rem;
  }
  .active {
    background: rgb(45, 43, 22);
  }
  &:hover {
    background: rgba(25, 25, 25, 1);
  }
  @media only screen and (max-width: 700px) {
    padding: 0rem 1rem;
    li {
      font-size: 16px;
      padding: 0.5rem;
    }
  }
`;

export default Navbar;
