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
      margin-top: 10px;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    height: auto;

    @media (max-width: 768px) {
      display: none
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

interface StartFormProps {
  onNext: () => void;
}

export const StartForm: React.FC<StartFormProps> = ({ onNext }) => {
  const [name, setName] = useState("");
  const { setUsername } = useUser();

  const handleSubmit = () => {
    setUsername(name);
    if (name !== "") {
      onNext();
    }
  };

  return (
    <TextContainer>
      <LogoContainer>
        <img src={Logo} alt="Customer Scoops Logo" />
      </LogoContainer>
      <p>
        Muchas gracias por tu interés en conocer <strong>customerScoops</strong>, que a través de
        Formularios Conversacionales Inteligentes te ayudamos a aumentar el revenue y rentabilidad
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
