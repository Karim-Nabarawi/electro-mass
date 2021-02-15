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
  margin-bottom: 3rem;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 5rem;
  background: rgba(25, 25, 25, 1);
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
    font-size: 2vw;
    padding: 1.7rem;
  }
  .active {
    background: rgb(45, 43, 22);
  }
`;

export default Navbar;
