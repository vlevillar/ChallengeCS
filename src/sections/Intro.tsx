import styled from "styled-components";
import bgImgDesktop from "../assets/bgImgTransparent.png";
import bgImgMobile from "../assets/bgImgMobile.svg";
import logo from "/logoCS.svg"
import Divider from "../assets/Divider.svg";
import { motion } from "framer-motion";

const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const ImageContainer = styled.div<{ isFinalScreen: boolean }>`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  background: linear-gradient(283.73deg, #231331 -29.4%, #00ccbc 50.02%);
  border-top-left-radius: 30%;
  border-bottom-left-radius: 30%;
  z-index: 1;

  .desktop-image {
    max-width: 100%;
    height: 90%;
    object-fit: cover;
    object-position: top;
  }

  .mobile-image {
    display: none;
  }

  .mobile-logo {
    display: none;
  }

  @media (max-width: 768px) {
    flex: 0;
    display: block;
    width: 100%;
    height: 100px;
    margin-left: 10px;
    order: -1;
    border-radius: 300px;
    padding: 20px 0;
    background: transparent;

    .desktop-image {
      display: none;
    }

    .mobile-image {
      display: block;
      width: 100%;
      height: 50%;
      object-fit: contain;
    }

    .mobile-logo {
      display: block;
      position: absolute;
      top: 40%; 
      left: 10vh;
      width: 20%;
      z-index: 4;
    }
  }
`;

const ExpandingDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  background: #00ccbc;
  z-index: 0;
  @media (max-width: 768px) {
  display: none;
}
`;

const ProgressFraction = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 45px;
  right: 20px;
  z-index: 50;

  @media (min-width: 1150px) {
    top: 75px;
    right: 40px;
  }

  p:first-of-type {
    font-weight: 600;
    font-size: 18px;
    margin-top: 2.5px;
  }

  p:last-of-type {
    font-weight: 400;
    font-size: 10px;
    margin-top: 8px;
  }
`;

interface IntroProps {
  children: React.ReactNode;
  isFinalScreen: boolean;
  currentIndex: number;
  totalSteps: number;
}

const Intro: React.FC<IntroProps> = ({
  children,
  isFinalScreen,
  currentIndex,
  totalSteps,
}) => {
  return (
    <IntroSection>
      {children}
      <ImageContainer isFinalScreen={isFinalScreen}>
        <img
          src={bgImgDesktop}
          alt="Customer Scoops Desktop"
          className="desktop-image"
        />
        <img
          src={logo}
          alt="Customer Scoops Logo Mobile"
          className="mobile-logo"
        />
        <img
          src={bgImgMobile}
          alt="Customer Scoops Mobile"
          className="mobile-image"
        />
        <ProgressFraction>
          <p>{(currentIndex + 1).toString().padStart(2, "0")}</p>
          <img src={Divider} style={{ margin: "5px" }} />
          <p>{totalSteps.toString().padStart(2, "0")}</p>
        </ProgressFraction>
      </ImageContainer>
      <ExpandingDiv
        initial={{ width: 0 }}
        animate={isFinalScreen ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </IntroSection>
  );
};

export default Intro;
