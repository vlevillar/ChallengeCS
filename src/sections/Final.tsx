import styled from "styled-components";
import Logo from "/logoCS.svg";
import DarkButton from "../components/DarkButton";

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 30px;
  margin-left: 10vh;
  padding-right: 15vh;

  @media (max-width: 768px) {
    width: 80%;
    padding: 50px;
    margin: 0 auto;
    text-align: start;
    p {
      font-size: 30px;
    }
    .logo {
      display: none;
    }
  }
`;

const Title = styled.p`
  font-size: 30px;
  font-family: "K2D";
  color: #231331;
  margin-top: 30px;
  line-height: 1.3;
`;
const SubTitle = styled.p`
  font-size: 20px;
  font-family: "K2D";
  font-style: italic;
  font-weight: 300;
  color: #231331;
  margin-top: 30px;
  margin-bottom: 40px;
  line-height: 1.3;
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
