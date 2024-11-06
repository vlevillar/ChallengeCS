import styled from "styled-components";
import Logo from "/logoCS.svg";
import Arrow from '../assets/ArrowRightGreen.svg';
import LightButton from "../components/LightButton";
import DarkButton from "../components/DarkButton";
import BackButton from "../components/BackButton";
import { useUser } from "../hooks/UserContext";
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
  color: #555;
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

interface SecondFormProps {
    onBack: () => void;
    onNext: () => void;
  }  

export const SecondForm: React.FC<SecondFormProps> = ({ onBack, onNext }) => {
    const { username } = useUser();
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    
    const buttonOptions = [
        { id: '1', label: 'Board member' },
        { id: '2', label: 'C-level' },
        { id: '3', label: 'Gerente' },
        { id: '4', label: 'Subgerente' },
        { id: '5', label: 'Jefe área' },
        { id: '6', label: 'Lider de área' },
        { id: '7', label: 'Ejecutivo / Analista' },
        { id: '8', label: 'Otro' },
      ];

      const handleButtonClick = (buttonId: string) => {
        setSelectedButton(buttonId);
      };    

  return (
    <TextContainer>
      <img src={Logo} alt="Logo" />
      <p>
        <strong>Genial {username},</strong> ahora nos gustaría tener cierta info para diseñar una gran
        propuesta de valor para ti: ¿Cuál es tu cargo/posición dentro de tu
        empresa?
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
        <BackButton onClick={onBack}/>
      <DarkButton endContent={Arrow} onClick={onNext} disabled={!selectedButton}>Siguiente</DarkButton>
      </NavigationButtons>
    </TextContainer>
  );
};
