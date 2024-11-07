import styled from "styled-components";
import Logo from "/logoCS.svg";
import Arrow from '../assets/ArrowRightGreen.svg';
import LightButton from "../components/LightButton";
import DarkButton from "../components/DarkButton";
import BackButton from "../components/BackButton";
import { useState } from "react";

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
    width: 80%;
  padding: 50px;
  margin: 0 auto;
  text-align: start;
    p {
      font-size: 19px;
    }
    .logo{
      display: none;
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
  @media (max-width: 768px) {
  padding-left:45px;
}
`;

interface FourthFormProps {
  onBack: () => void;
  onNext: () => void;
}

export const FourthForm: React.FC<FourthFormProps> = ({ onBack, onNext }) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const buttonOptions = [
    { id: '1', label: 'SAP' },
    { id: '2', label: 'Microsoft Dynamics' },
    { id: '3', label: 'Salesforce' },
    { id: '4', label: 'Hubspot' },
    { id: '5', label: 'Zoho' },
    { id: '6', label: 'Netsuite (oracle)' },
    { id: '7', label: 'Monday' },
    { id: '8', label: 'CRM Propio' },
    { id: '9', label: 'No tengo CRM' },
  ];

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };

  return (
    <TextContainer>
      <img src={Logo} alt="Logo" className="logo" />
      <p>
        ¿Cuál CRM están utilizando en tu empresa?
        <br />
        CRM:
      </p>
      <ButtonsContainer>
        {buttonOptions.map((button) => (
          <LightButton
            key={button.id}
            size="full"
            selected={selectedButton === button.id}
            onClick={() => handleButtonClick(button.id)}
          >
            {button.label}
          </LightButton>
        ))}
      </ButtonsContainer>
      <NavigationButtons>
        <BackButton onClick={onBack} />
        <DarkButton 
          endContent={Arrow} 
          onClick={onNext} 
          disabled={!selectedButton} 
        >
          Siguiente
        </DarkButton>
      </NavigationButtons>
    </TextContainer>
  );
};
