import styled from "styled-components";
import Logo from "/logoCS.svg";
import Input from "../components/Input";
import DarkButton from "../components/DarkButton";
import { useState } from "react";
import { useUser } from "../hooks/UserContext";

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
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;

interface StartFormProps {
  onNext: () => void;
}

export const StartForm: React.FC<StartFormProps> = ({ onNext }) => {
  const [name, setName] = useState("");
  const { setUsername } = useUser();

  const handleSubmit = () => {
    setUsername(name);
    if(name !== ''){
    onNext();
    } 
  };

  return (
    <TextContainer>
      <img src={Logo} alt="Logo" />
      <p>
        Muchas gracias por tu interés en conocer <strong>customerScoops</strong>, que a través de
        Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad
        de tu negocio.
      </p>
      <p>Queremos conocerte, ¿cuál es tu nombre?</p>
      <FormContainer>
        <Input
          placeholder="Nombre"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <DarkButton onClick={handleSubmit}>Comenzar</DarkButton>
      </FormContainer>
    </TextContainer>
  );
};

export default StartForm;
