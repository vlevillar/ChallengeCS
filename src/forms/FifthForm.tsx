import styled from "styled-components";
import Logo from "/logoCS.svg";
import Arrow from '../assets/ArrowRightGreen.svg';
import LightButton from "../components/LightButton";
import DarkButton from "../components/DarkButton";
import BackButton from "../components/BackButton";

const TextContainer = styled.div`
flex: 1;
max-width: 600px;
padding: 30px;
margin-left: 10vh;
padding-right: 15vh;

p {
  font-size: 20px;
  font-family: "K2D";
  color: #231331;
  margin-top: 20px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  margin-left: 0;
  padding-right: 0;
  p {
    font-size: 0.9rem;
  }
}
`;

const ButtonsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 5px;
margin-top: 20px;

@media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 480px) {
  grid-template-columns: 1fr; 
}
`;

const NavigationButtons = styled.div`
display: flex;
padding-top: 50px;
align-items: center;
position: relative;
gap: 5px;
right: 45px;
`;


interface FifthFormProps {
    onBack: () => void;
}  

export const FifthForm : React.FC<FifthFormProps> = ({ onBack }) => {

  return (
    <TextContainer>
      <img src={Logo} alt="Logo" />
      <p>
      <strong>Ahora te vamos a sorprender... </strong>
    <br/>
        ¿A cuál industria pertenece tu empresa?
      </p>
      <ButtonsContainer>
        <LightButton size="full">Tecnologia</LightButton>
        <LightButton size="full">Software</LightButton>
        <LightButton size="full">Servicios</LightButton>
        <LightButton size="full">Financiera</LightButton>
        <LightButton size="full">Telecomunicaciones</LightButton>
        <LightButton size="full">Producción / Fabricación</LightButton>
        <LightButton size="full">Logística</LightButton>
        <LightButton size="full">Consumo Masivo</LightButton>
        <LightButton size="full">Mayorista</LightButton>
        <LightButton size="full">Retail</LightButton>
        <LightButton size="full">Otra</LightButton>
      </ButtonsContainer>
      <NavigationButtons>
        <BackButton onClick={onBack}/>
      <DarkButton endContent={Arrow}>Siguiente</DarkButton>
      </NavigationButtons>
    </TextContainer>
  );
};
