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
  min-height: 50vh;
  position: relative;
  padding: 0rem 5rem;
  .description {
    z-index: 2;
  }
  .image {
    img {
      width: 30%;
      position: absolute;
      top: -30vh;
      right: 5vw;
    }
  }
  .smallText {
    color: white;
    font-weight: lighter;
    font-size: 4vw;
  }
`;

const StyledFoucsed = styled(motion.p)`
  font-weight: bold;
  color: #fce300;
  font-size: 6vw;
`;
export default WelcomeSection;
