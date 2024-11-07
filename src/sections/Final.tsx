import styled from "styled-components";
import Logo from "/logoCS.svg";
import DarkButton from "../components/DarkButton";

export const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 30px;
  margin-left: 10vh;
  padding-right: 15vh;

  @media (max-width: 768px) {
    width: 80%;
    height: 100%;
    padding-left: 50px;
    padding-right: 50px;
    margin: 0 auto;
    margin-bottom: 15%;
    text-align: start;

    .logo {
      display:none;
    }

  }

  @media (max-width: 425px) {
    width: 70%;
  }

  @media (max-width: 375px) {
    width: 60%;
  }

  @media (max-width: 320px) {
    width: 55%;
  }
`;

const Title = styled.p`
  font-size: 40px;
  font-family: "K2D";
  color: #231331;
  margin-top: 30px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
  
  @media (max-width: 375px) {
    font-size: 25px;
  }
  
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;
const SubTitle = styled.p`
  font-size: 30px;
  font-family: "K2D";
  font-style: italic;
  font-weight: 300;
  color: #231331;
  margin-top: 30px;
  margin-bottom: 40px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 25px;
  }
  
  @media (max-width: 425px) {
    font-size: 20px;
  }
  
  @media (max-width: 375px) {
    font-size: 15px;
  }
  
  @media (max-width: 320px) {
    font-size: 10px;
  }
`;

const FinalScreen: React.FC = () => {
  const handleFinish = () => {
    window.open("https://www.customerscoops.com/", "_blank");
  };
  return (
    <TextContainer>
      <img src={Logo} alt="Logo" className="logo" />
      <Title>
        <strong>Muchas Gracias</strong>
        <br />
        por querer ser parte de la familia Scoopers.
      </Title>
      <SubTitle>Nos vemos pronto!</SubTitle>
      <DarkButton onClick={handleFinish}>Finalizar</DarkButton>
    </TextContainer>
  );
};

export default FinalScreen;
