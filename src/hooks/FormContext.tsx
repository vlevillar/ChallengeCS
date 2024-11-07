// FormContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type FormSelections = {
  [formName: string]: string;
};

interface FormContextType {
  formSelections: FormSelections;
  updateFormSelection: (formName: string, selection: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formSelections, setFormSelections] = useState<FormSelections>({});

  const updateFormSelection = (formName: string, selection: string) => {
    setFormSelections(prevSelections => ({
      ...prevSelections,
      [formName]: selection,
    }));
  };

  return (
    <FormContext.Provider value={{ formSelections, updateFormSelection }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext debe ser usado dentro de un FormProvider');
  }
  return context;
};
