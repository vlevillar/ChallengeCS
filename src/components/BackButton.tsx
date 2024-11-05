import React from 'react';
import styled from 'styled-components';
import arrowIcon from '../assets/ArrowLeftGrey.svg';

interface BackButtonProps {
  onClick?: () => void;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon src={arrowIcon} alt="Arrow" />
    </Button>
  );
};

export default BackButton;
