import Logo from "/logoCS.svg";
import Arrow from '../assets/ArrowRightGreen.svg';
import LightButton from "../components/LightButton";
import DarkButton from "../components/DarkButton";
import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";
import { useFormContext } from "../hooks/FormContext";
import { TextContainer } from "../styles/forms/TextContainer";
import { NavigationButtons } from "../styles/forms/NavigationButtons";
import { ButtonsContainer } from "../styles/forms/ButtonsContainer";
interface FifthFormProps {
  onBack: () => void;
  onNext: () => void;
}

export const FifthForm: React.FC<FifthFormProps> = ({ onBack, onNext }) => {
  const { formSelections, updateFormSelection } = useFormContext();
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  useEffect(() => {
    if (formSelections["FifthForm"]) {
      setSelectedButton(formSelections["FifthForm"]);
    }
  }, [formSelections]);

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
    updateFormSelection("FifthForm", buttonId);
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
