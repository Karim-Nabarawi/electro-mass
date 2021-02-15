import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade, lineAnim } from "../animation";

import { useInView } from "react-intersection-observer";

import { useAnimation } from "framer-motion";

//#region  title With line animation
export const TileWithLine = ({ Text }) => {
  const [element, controls] = useScroll();

  return (
    <StyledTitleContainer>
      <div className="title">
        <motion.h1 variants={fade} initial="hidden" animate={controls} ref={element}>
          {Text}
        </motion.h1>
        <StyledLine variants={lineAnim} initial="hidden" animate={controls} ref={element}></StyledLine>
      </div>
    </StyledTitleContainer>
  );
};

const StyledTitleContainer = styled(motion.div)`
  color: #fce300;
  .title {
    position: relative;
    display: inline-block;
  }
`;

const StyledLine = styled(motion.div)`
  margin-top: 1rem;
  height: 0.5rem;
  background: #fce300;
  border-radius: 5rem;
  width: 0%;
  position: absolute;
  bottom: -100;
  left: 0%;
`;

//#endregion

//#region  Scroll
export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.4 });
  view ? controls.start("show") : controls.start("hidden");
  return [element, controls];
};

//#endregion
