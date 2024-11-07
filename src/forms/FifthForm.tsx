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
      display:none;
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

interface FifthFormProps {
  onBack: () => void;
  onNext: () => void;
}

export const FifthForm: React.FC<FifthFormProps> = ({ onBack, onNext }) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const buttonOptions = [
    { id: '1', label: 'Tecnologia' },
    { id: '2', label: 'Software' },
    { id: '3', label: 'Servicios' },
    { id: '4', label: 'Financiera' },
    { id: '5', label: 'Telecomunicaciones' },
    { id: '6', label: 'Producción / Fabricación' },
    { id: '7', label: 'Logística' },
    { id: '8', label: 'Consumo Masivo' },
    { id: '9', label: 'Mayorista' },
    { id: '10', label: 'Retail' },
    { id: '11', label: 'Otra' },
  ];

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };

  return (
    <TextContainer>
      <img src={Logo} alt="Logo" className="logo"/>
      <p>
        <strong>Ahora te vamos a sorprender...</strong>
        <br />
        ¿A cuál industria pertenece tu empresa?
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
          disabled={!selectedButton}
          onClick={onNext}
        >
          Siguiente
        </DarkButton>
      </NavigationButtons>
    </TextContainer>
  );
};
