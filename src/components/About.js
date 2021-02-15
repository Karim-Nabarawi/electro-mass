import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Images
import { GiBinoculars } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { ImTarget } from "react-icons/im";
import { TileWithLine } from "./Ulti";
import FrameContainer from "./FrameContainer";

const About = () => {
  return (
    <StyledAbout>
      <TileWithLine Text="ABOUT" />
      <FrameContainer>
        <StyledContent>
          <StyledHeader color="#FCB40D">
            <div className="imgContainer">
              <div className="outerConatiner">
                <div className="innerConatiner">
                  <GiBinoculars className="icon" />
                </div>
              </div>
            </div>
            <h1>MISSION</h1>
            <p>To provide suiable desing for all needs</p>
          </StyledHeader>
          <StyledHeader color="#A8FC0D">
            <div className="imgContainer">
              <div className="outerConatiner">
                <div className="innerConatiner">
                  <FaLightbulb className="icon" />
                </div>
              </div>
            </div>
            <h1>VISION</h1>
            <p>To improve productivity in the least time</p>
          </StyledHeader>
          <StyledHeader color="#1961fc">
            <div className="imgContainer">
              <div className="outerConatiner">
                <div className="innerConatiner">
                  <ImTarget className="icon" />
                </div>
              </div>
            </div>
            <h1>Values</h1>
            <p>Trustworthiness, Innovation & Quality</p>
          </StyledHeader>
        </StyledContent>
      </FrameContainer>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  margin-top: 5rem;
  padding: 5rem 5rem;
  text-align: center;
  h1 {
    font-size: 64px;
  }
`;
const StyledContent = styled(motion.div)`
  margin-top: 8rem;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 15rem;
  grid-row-gap: 5rem;
  padding: 0px 5rem;
  text-align: center;
`;

const StyledHeader = styled(motion.div)`
  position: relative;
  width: 100%;
  .imgContainer {
    position: relative;
    display: inline-block;
    width: 100%;
  }
  .outerConatiner {
    position: absolute;
    border: 4px solid #212322;
    border-radius: 200px;
    display: inline-block;
    top: -3rem;
    transform: translateX(-50%);
    z-index: 22;
    background-color: #212322;
  }
  .innerConatiner {
    border: 4px solid ${(props) => props.color};
    border-radius: 200px;
  }
  .icon {
    width: 50px;
    height: 50px;
    fill: ${(props) => props.color};
    margin: 10px;
  }
  h1 {
    color: white;
    font-size: 56px;
    padding: 50px 20px;
    background-color: ${(props) => props.color};
    border-radius: 15px;
  }
  p {
    margin: 4rem 0px;
    color: #fce300;
    font-size: 28px;
    min-height: 8rem;
    text-align: left;
  }
`;

export default About;
