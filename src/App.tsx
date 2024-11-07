import { useState } from "react";
import { UserProvider } from "./hooks/UserContext";
import StartForm from "./forms/StartForm";
import Intro from "./sections/Intro";
import { SecondForm } from "./forms/SecondForm";
import GlobalStyles from "./styles/GlobalStyles";
import { ThirdForm } from "./forms/ThirdForm";
import { FourthForm } from "./forms/FourthForm";
import { FifthForm } from "./forms/FifthForm";
import FinalScreen from "./sections/Final";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FormProvider } from "./hooks/FormContext";

const formSequence = [
  "start",
  "second",
  "third",
  "fourth",
  "fifth",
  "final",
] as const;
type FormType = (typeof formSequence)[number];

const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: transparent;
  z-index: 10;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background-color: #231331;
  width: 0;
`;

const ResponsiveMotionDiv = styled(motion.div)`
  width: 90vh;
  z-index: 3;

  @media (max-width: 768px) {
    max-width: 70vh;
  }

  @media (max-width: 430px) {
    max-width: 65vh;
  }

  @media (max-width: 375px) {
    max-width: 90vh;
  }
`;


function App() {
  const [currentForm, setCurrentForm] = useState<FormType>("start");
  const [direction, setDirection] = useState(1);

  const handleNextForm = () => {
    setDirection(1);
    const currentIndex = formSequence.indexOf(currentForm);
    if (currentIndex < formSequence.length - 1) {
      setCurrentForm(formSequence[currentIndex + 1]);
    }
  };

  const handlePreviousForm = () => {
    setDirection(-1);
    const currentIndex = formSequence.indexOf(currentForm);
    if (currentIndex > 0) {
      setCurrentForm(formSequence[currentIndex - 1]);
    }
  };

  const isFinalScreen = currentForm === "final";
  const currentIndex = formSequence.indexOf(currentForm);
  const totalSteps = formSequence.length;

  return (
    <UserProvider>
      <FormProvider>
        <GlobalStyles />
        <ProgressContainer>
          <ProgressBar
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </ProgressContainer>
        <Intro
          isFinalScreen={isFinalScreen}
          currentIndex={currentIndex}
          totalSteps={totalSteps}
        >
          <AnimatePresence mode="wait">
            <ResponsiveMotionDiv
              key={currentForm}
              initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              style={{ width: "90vh", zIndex: 3 }}
            >
              {currentForm === "start" && <StartForm onNext={handleNextForm} />}
              {currentForm === "second" && (
                <SecondForm
                  onBack={handlePreviousForm}
                  onNext={handleNextForm}
                />
              )}
              {currentForm === "third" && (
                <ThirdForm
                  onBack={handlePreviousForm}
                  onNext={handleNextForm}
                />
              )}
              {currentForm === "fourth" && (
                <FourthForm
                  onBack={handlePreviousForm}
                  onNext={handleNextForm}
                />
              )}
              {currentForm === "fifth" && (
                <FifthForm
                  onBack={handlePreviousForm}
                  onNext={handleNextForm}
                />
              )}
              {currentForm === "final" && <FinalScreen />}
            </ResponsiveMotionDiv>
          </AnimatePresence>
        </Intro>
      </FormProvider>
    </UserProvider>
  );
}

export default App;
