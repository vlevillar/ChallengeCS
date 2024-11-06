import React from 'react';
import styled from 'styled-components';

interface LightButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  startContent?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  selected?: boolean; // Prop para saber si el botón está seleccionado
}

const Button = styled.button<{ size: 'sm' | 'md' | 'lg' | 'full'; hasStartContent: boolean; selected: boolean }>`
  display: flex;
  align-items: center;
  font-family: 'SF Pro';
  font-weight: 400;
  gap: 8px;
  padding-right: 10px;
  padding-top: ${({ hasStartContent }) => (hasStartContent ? '5px' : '14px')};
  padding-bottom: ${({ hasStartContent }) => (hasStartContent ? '5px' : '14px')};
  border: 1px solid #000;
  border-radius: 30px;
  background-color: ${({ selected }) => (selected ? '#000' : '#fff')}; /* Fondo negro si está seleccionado */
  color: ${({ selected }) => (selected ? '#fff' : '#000')}; /* Texto blanco si está seleccionado */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* Transición de fondo y color */
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
        return '100%';
      default:
        return '140px';
    }
  }};
  white-space: normal;
  text-align: ${({ hasStartContent }) => (hasStartContent ? 'left' : 'center')};

  &:hover {
    background-color: ${({ selected }) => (selected ? '#000' : '#f0f0f0')}; /* Cambia el fondo solo si no está seleccionado */
  }
`;

const Circle = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background-color: #00ccbc;
  border-radius: 50%;
  margin-left: 3px;
  color: white;
  font-weight: bold;
  font-family: 'SF Pro';
`;

const LightButton: React.FC<LightButtonProps> = ({ children, onClick, startContent, size = 'md', selected = false }) => {
  return (
    <Button onClick={onClick} size={size} hasStartContent={!!startContent} selected={selected}>
      {startContent && <Circle>{startContent}</Circle>}
      {children}
    </Button>
  );
};

export default LightButton;
