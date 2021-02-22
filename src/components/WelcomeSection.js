import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Images
import sideImage from "../images/Layer 8.png";

const WelcomeSection = () => {
  return (
    <StyledWelcomeSection>
      <div className="description">
        <StyledFoucsed className="smallText">WELCOME TO</StyledFoucsed>
        <StyledFoucsed>A BETTER</StyledFoucsed>
        <StyledFoucsed>BRIGHTER</StyledFoucsed>
        <StyledFoucsed>TOMORROW</StyledFoucsed>
      </div>
      <div className="image">
        <motion.img src={sideImage} alt="guy in logo" />
      </div>
    </StyledWelcomeSection>
  );
};

const StyledWelcomeSection = styled(motion.div)`
  background: #212322;
  min-height: 20vh;
  position: relative;
  padding: 0rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .description {
    z-index: 2;
  }
  .image {
    text-align: center;
    img {
      width: 80%;
      padding: 1rem;
    }
  }
  .smallText {
    color: white;
    font-weight: lighter;
    font-size: 4vw;
  }

  @media only screen and (max-width: 500px) {
    padding: 0rem 1rem;
    .image {
      display: none;
    }
    .description {
      width: 100%;
      text-align: center;
    }
  }
`;

const StyledFoucsed = styled(motion.p)`
  font-weight: bold;
  color: #fce300;
  font-size: 6vw;
`;
export default WelcomeSection;
