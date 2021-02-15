import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { TileWithLine } from "./Ulti";

const Services = () => {
  return (
    <StyledSerives>
      <TileWithLine Text="SERVICES" />
    </StyledSerives>
  );
};

const StyledSerives = styled(motion.div)`
  min-height: 50vh;
  text-align: center;
  margin-top: 5rem;
  h1 {
    font-size: 64px;
  }
`;
export default Services;
