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
interface FourthFormProps {
  onBack: () => void;
  onNext: () => void;
}

export const FourthForm: React.FC<FourthFormProps> = ({ onBack, onNext }) => {
  const { formSelections, updateFormSelection } = useFormContext();
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  useEffect(() => {
    if (formSelections["FourthForm"]) {
      setSelectedButton(formSelections["FourthForm"]);
    }
  }, [formSelections]);

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
    updateFormSelection("FourthForm", buttonId);
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
