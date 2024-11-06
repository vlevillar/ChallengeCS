import styled from 'styled-components';
import bgImg from "../assets/bgImgTransparent.png"


const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vh;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  background: linear-gradient(283.73deg, #231331 -29.4%, #00CCBC 50.02%);  ;
  border-top-left-radius: 30%;
  border-bottom-left-radius: 30%;
  
  img {
    max-width: 100%;
    height: 90%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 20px;
  }
`;

interface IntroProps {
    children: React.ReactNode;
  }

const Intro: React.FC<IntroProps> = ({ children }) => {
  return (
    <IntroSection>
      {children}
      <ImageContainer>
        <img src={bgImg} alt="Customer Scoops" />
      </ImageContainer>
    </IntroSection>
  );
};

export default Intro;
