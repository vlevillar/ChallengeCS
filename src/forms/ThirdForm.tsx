import styled from "styled-components";
import Logo from "/logoCS.svg";
import Arrow from "../assets/ArrowRightGreen.svg";
import LightButton from "../components/LightButton";
import DarkButton from "../components/DarkButton";
import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";
import { useFormContext } from "../hooks/FormContext";
import { TextContainer } from "../styles/forms/TextContainer";
import { NavigationButtons } from "../styles/forms/NavigationButtons";

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

interface ThirdFormProps {
  onBack: () => void;
  onNext: () => void;
}

export const ThirdForm: React.FC<ThirdFormProps> = ({ onBack, onNext }) => {
  const { formSelections, updateFormSelection } = useFormContext();
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  useEffect(() => {
    if (formSelections["ThirdForm"]) {
      setSelectedButton(formSelections["ThirdForm"]);
    }
  }, [formSelections]);

  const buttonOptions = [
    { id: "1", startContent: "A", label: "Aumentar conversión de leads a clientes"},
    { id: "2", startContent: "B", label: "Reducir customer churn"},
    { id: "3", startContent: "C", label: "Implementar un programa VoC"},
    { id: "4", startContent: "D", label: "Reducir costos en gestión de reclamos"},
    { id: "5", startContent: "E", label: "Optimizar procesos comerciales" },
    { id: "6", startContent: "F", label: "Optimizar procesos operativos" },
    { id: "7", startContent: "G", label: "Otro" },
  ];

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
    updateFormSelection("ThirdForm", buttonId);
  };

  return (
    <TextContainer>
      <img src={Logo} alt="Logo" className="logo" />
      <p>¿Cuáles son tus principales desafíos para 2024?</p>
      <ButtonsContainer>
        {buttonOptions.map((button) => (
          <LightButton
            key={button.id}
            startContent={button.startContent}
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
