import React from 'react';
import styled from 'styled-components';

interface LightButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  startContent?: string;
  size?: 'sm' | 'md' | 'lg' | "full";
}

const Button = styled.button<{ size: 'sm' | 'md' | 'lg' | "full"; hasStartContent: boolean }>`
  display: flex;
  align-items: center;
  font-family: 'SF Pro';
  font-weight: 400;
  gap: 8px;
  padding-top: ${({ hasStartContent }) => (hasStartContent ? '5px' : '14px')};
  padding-bottom: ${({ hasStartContent }) => (hasStartContent ? '5px' : '14px')};
  border: 1px solid #000;
  border-radius: 20px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s ease;
  justify-content: ${({ hasStartContent }) => (hasStartContent ? 'flex-start' : 'center')};
  width: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '100px';
      case 'md':
        return '140px';
      case 'lg':
        return '190px';
      case 'full':
        return 'full';
      default:
        return '140px'; 
    }
  }};
   white-space: normal; /* Permitir que el texto envuelva */
  text-align: ${({ hasStartContent }) => (hasStartContent ? 'left' : 'center')}; /* Alineación del texto */
  
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Circle = styled.div`
  flex-shrink: 0; /* Evitar que el círculo cambie de tamaño */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background-color: #00CCBC;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-family: 'SF Pro';
`;

const LightButton: React.FC<LightButtonProps> = ({ children, onClick, startContent, size = 'md' }) => {
  return (
    <Button onClick={onClick} size={size} hasStartContent={!!startContent}>
      {startContent && <Circle>{startContent}</Circle>}
      {children}
    </Button>
  );
};

export default LightButton;
