import React, { useState } from 'react';
import { UserProvider } from './hooks/UserContext';
import StartForm from './forms/StartForm';
import Intro from './sections/Intro';
import { SecondForm } from './forms/SecondForm';
import GlobalStyles from './styles/GlobalStyles';
import { ThirdForm } from './forms/ThirdForm';
import { FourthForm } from './forms/FourthForm';
import { FifthForm } from './forms/FifthForm';
import { motion, AnimatePresence } from 'framer-motion';

const formSequence = ['start', 'second', 'third', 'fourth', 'fifth'] as const;
type FormType = typeof formSequence[number];

function App() {
  const [currentForm, setCurrentForm] = useState<FormType>('start');
  const [direction, setDirection] = useState(1); // 1: forward, -1: backward

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

  return (
    <UserProvider>
      <GlobalStyles />
      <Intro>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentForm}
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          >
            {currentForm === 'start' && <StartForm onNext={handleNextForm} />}
            {currentForm === 'second' && (
              <SecondForm onBack={handlePreviousForm} onNext={handleNextForm} />
            )}
            {currentForm === 'third' && (
              <ThirdForm onBack={handlePreviousForm} onNext={handleNextForm} />
            )}
            {currentForm === 'fourth' && (
              <FourthForm onBack={handlePreviousForm} onNext={handleNextForm} />
            )}
            {currentForm === 'fifth' && <FifthForm onBack={handlePreviousForm} />}
          </motion.div>
        </AnimatePresence>
      </Intro>
    </UserProvider>
  );
}

export default App;
