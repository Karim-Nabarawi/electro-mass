import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { TileWithLine } from "./Ulti";

import serivesImg from "../images/Serives.png";
import FrameContainer from "./FrameContainer";

const Services = () => {
  return (
    <StyledSerives>
      <div className="header">
        <h1>ELECTRO MECHANIC Services</h1>
      </div>
      <FrameContainer>
        <StyledContainer>
          <div className="description ">
            <TileWithLine Text="Electrical Design" sideText="1" />
            <div className="details">
              <ul>
                <li>Automation</li>
                <li>Panel Design</li>
                <li>Power Design</li>
                <li>Pneumatic Design</li>
              </ul>
            </div>
          </div>
          <div className="middleImg">
            <img src={serivesImg} alt="" />
          </div>
          <div className="description ">
            <TileWithLine Text="Mechanical Design" sideText="2" />
            <div className="details">
              <ul>
                <li>Maintence</li>
                <li>Fabrication</li>
              </ul>
            </div>
          </div>
          <div className="heightControl order ">
            <TileWithLine Text="Installations" sideText="4" />
          </div>
          <div className="heightControl ">
            <TileWithLine Text="Consultation" sideText="3" />
          </div>
        </StyledContainer>
      </FrameContainer>
    </StyledSerives>
  );
};

const StyledSerives = styled(motion.div)`
  min-height: 80vh;
  margin-top: 5rem;
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
  grid-column-gap: 15rem;
  grid-row-gap: 5rem;
  padding: 2rem 4rem;
  text-align: left;
  h1 {
    font-size: 48px;
  }

  .middleImg {
    grid-area: 1 / 2 / 4 / 3;
    padding: 0 2rem;
    text-align: center;
    position: relative;
  }
  img {
    position: absolute;
    top: -30px;
    left: -100px;
  }
  .heightControl {
    min-height: 10rem;
    margin: auto;
    width: 100%;
  }
  .description {
    padding: 10% 0;
    margin: auto;
  }
  .details {
    width: 100%;
    margin-top: 3rem;
    padding-left: 2rem;
    font-size: 32px;
    color: white;
  }

  @media only screen and (max-width: 1180px) {
    img {
      width: 40vw;
      top: 10%;
    }
    .middleImg {
      display: none;
    }
    .heightControl {
      width: auto;
      min-height: 5rem;
    }
  }

  @media only screen and (max-width: 1650px) {
    grid-row-gap: 1rem;
    img {
      width: 40vw;
      top: 30px;
    }
    .order:nth-of-type(1) {
      order: 1;
    }
    .order:nth-of-type(2) {
      order: 2;
    }
    .order:nth-of-type(3) {
      order: 3;
    }
    .order:nth-of-type(4) {
      order: 4;
    }
  }

  @media only screen and (max-width: 575px) {
    padding: 2rem 1rem;
    h1 {
      font-size: 24px;
    }
    .details {
      font-size: 18px;
    }
  }
`;

export default Services;
