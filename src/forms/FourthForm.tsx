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


interface FourthFormProps {
    onBack: () => void;
    onNext: () => void;
}

export const FourthForm: React.FC<FourthFormProps> = ({ onBack, onNext }) => {
  
  return (
    <TextContainer>
      <img src={Logo} alt="Logo" />
      <p>
      ¿Cuál CRM están utilizando en tu empresa?
    <br/>
        CRM:
      </p>
      <ButtonsContainer>
        <LightButton size="full">SAP</LightButton>
        <LightButton size="full">Microsoft Dynamics</LightButton>
        <LightButton size="full">Salesforce</LightButton>
        <LightButton size="full">Hubspot</LightButton>
        <LightButton size="full">Zoho</LightButton>
        <LightButton size="full">Netsuite (oracle)</LightButton>
        <LightButton size="full">Monday</LightButton>
        <LightButton size="full">CRM Propio</LightButton>
        <LightButton size="full">No tengo CRM</LightButton>
      </ButtonsContainer>
      <NavigationButtons>
        <BackButton onClick={onBack}/>
      <DarkButton endContent={Arrow} onClick={onNext}>Siguiente</DarkButton>
      </NavigationButtons>
    </TextContainer>
  );
};
