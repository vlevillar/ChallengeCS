import React from 'react';
import styled from 'styled-components';

interface DarkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  endContent?: string; 
  disabled?: boolean; 
}

const StyledButton = styled.button<{ size: 'sm' | 'md' | 'lg'; hasEndContent: boolean, disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ hasEndContent }) => (hasEndContent ? 'space-around' : 'center')};
  background-color: ${({ disabled }) => (disabled ? '#757575' : '#231331')};
  font-family: 'SF Pro';
  font-weight: 400;
  color: white;
  border: none;
  border-radius: 20px; 
  padding: 14px 20px;
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;
  width: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '100px';
      case 'md':
        return '140px';
      case 'lg':
        return '190px';
      default:
        return '140px';
    }
  }};
  
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#757575' : '#3f3f3f')};
  }

  &:focus {
    outline: none;
  }
`;

const EndContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

const DarkButton: React.FC<DarkButtonProps> = ({ size = 'md', endContent, children, disabled = false, ...rest }) => {
  return (
    <StyledButton size={size} {...rest} hasEndContent={!!endContent} disabled={disabled}>
      <span>{children}</span>
      {endContent && (
        <EndContentWrapper>
          <Icon src={endContent} alt="Icon" />
        </EndContentWrapper>
      )}
    </StyledButton>
  );
};

export default DarkButton;
