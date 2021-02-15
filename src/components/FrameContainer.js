import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

import topframe from "../images/top frame.png";
import bottomframe from "../images/bottom frame.png";

const FrameContainer = ({ children }) => {
  return (
    <StyledFrameContainer>
      <img src={topframe} alt="" className="corner TL" />
      <img src={bottomframe} alt="" className="corner BR" />
      {children}
    </StyledFrameContainer>
  );
};

const StyledFrameContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  border: 16px solid #fce300;
  min-height: 10vh;
  overflow: hidden;

  .corner {
    position: absolute;
  }
  .TL {
    top: -16px;
    left: -16px;
  }
  .TR {
    top: -10px;
    right: -10px;
  }
  .BL {
    bottom: -10px;
    left: -10px;
  }
  .BR {
    bottom: -16px;
    right: -16px;
  }
`;
export default FrameContainer;
