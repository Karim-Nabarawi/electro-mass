import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Images
import Logo from "../images/Logo-text-only.svg";

//Components
import WelcomeSection from "../components/WelcomeSection";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <StyledHome>
      <div className="alignPadding">
        <StyledLogo src={Logo} alt="guy in logo" />
      </div>
      <Navbar />
      <WelcomeSection />
      {/* <About /> */}
      <Services />
      <Partners />
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  background: #212322;
  .alignPadding {
    padding: 0rem 5vw;
  }
`;

const StyledLogo = styled(motion.img)`
  width: 20vw;
  margin: 5vh 0vh;
`;

export default Home;
