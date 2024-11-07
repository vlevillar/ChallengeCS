import Logo from "/logoCS.svg";
import Arrow from '../assets/ArrowRightGreen.svg';
import LightButton from "../components/LightButton";
import DarkButton from "../components/DarkButton";
import BackButton from "../components/BackButton";
import { useUser } from "../hooks/UserContext";
import { useEffect, useState } from "react";
import { useFormContext } from "../hooks/FormContext";
import { TextContainer } from "../styles/forms/TextContainer";
import { NavigationButtons } from "../styles/forms/NavigationButtons";
import { ButtonsContainer } from "../styles/forms/ButtonsContainer";

interface SecondFormProps {
    onBack: () => void;
    onNext: () => void;
  }  

export const SecondForm: React.FC<SecondFormProps> = ({ onBack, onNext }) => {
    const { username } = useUser();
    const { formSelections, updateFormSelection } = useFormContext();
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    useEffect(() => {
      if (formSelections['SecondForm']) {
        setSelectedButton(formSelections['SecondForm']);
      }
    }, [formSelections]);
    
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
        updateFormSelection('SecondForm', buttonId);
      };    

  return (
    <TextContainer>
      <img src={Logo} alt="Logo" className="logo" />
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
