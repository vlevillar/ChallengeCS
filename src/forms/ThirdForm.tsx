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
    grid-template-columns: repeat(2, 1fr);
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


interface ThirdFormProps {
    onBack: () => void;
    onNext: () => void;
}  

export const ThirdForm : React.FC<ThirdFormProps> = ({ onBack, onNext }) => {
  return (
    <TextContainer>
      <img src={Logo} alt="Logo" />
      <p>
      ¿Cuáles son tus principales desafíos para 2024?
      </p>
      <ButtonsContainer>
        <LightButton startContent="A" size="full">Aumentar conversión de leads a clientes</LightButton>
        <LightButton startContent="B" size="full">Reducir customer churn</LightButton>
        <LightButton startContent="C" size="full">Implementar un programa VoC</LightButton>
        <LightButton startContent="D" size="full">Reducir costos en gestión de reclamos</LightButton>
        <LightButton startContent="E" size="full">Optimizar procesos comerciales</LightButton>
        <LightButton startContent="F" size="full">Optimizar procesos operativos</LightButton>
        <LightButton startContent="G" size="full">Otro</LightButton>
      </ButtonsContainer>
      <NavigationButtons>
        <BackButton onClick={onBack}/>
      <DarkButton endContent={Arrow} onClick={onNext}>Siguiente</DarkButton>
      </NavigationButtons>
    </TextContainer>
  );
};
