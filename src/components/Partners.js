import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//import Images
import image1 from "../images/New folder/1.jpg";
import image2 from "../images/New folder/2.jpg";
import image3 from "../images/New folder/3.jpg";
import image4 from "../images/New folder/4.jpg";
import image5 from "../images/New folder/5.jpg";
import image6 from "../images/New folder/6.jpg";
import image7 from "../images/New folder/7.jpg";
import image8 from "../images/New folder/8.jpg";

import FrameContainer from "./FrameContainer";

const Partners = () => {
  return (
    <StyledPartner>
      <div className="header">
        <h1>Our Partner in Success</h1>
      </div>
      <FrameContainer>
        <StyledContainer>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
        </StyledContainer>
      </FrameContainer>
    </StyledPartner>
  );
};

const StyledPartner = styled(motion.div)`
  padding: 0rem 5rem;
  text-align: center;
  .header {
    h1 {
      padding: 2rem;
      font-size: 64px;
      color: white;
    }
  }

  @media only screen and (max-width: 800px) {
    .header {
      h1 {
        padding: 1rem;
        font-size: 32px;
      }
    }
    min-height: 0;
  }
  @media only screen and (max-width: 500px) {
    padding: 0rem 1.5rem;
  }
`;

const StyledContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 0rem;
  padding: 2rem 4rem;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-column-gap: 1rem;
    padding: 3rem 2rem;
  }
`;

export default Partners;
