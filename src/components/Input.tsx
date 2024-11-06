import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  font-family: 'SF Pro';
  font-weight: 400;
  border-bottom: 2px solid #2313314c;
  color: #2313314c;
  padding: 8px 0;
  width: 100%;
  outline: none;
  transition: border-bottom-color 0.3s ease;

  &::placeholder {
    color: rgba(35, 19, 49, 0.5);
}

&:focus {
    color: #02090eb8;
    border-bottom-color: #02090eb8;
  }
`;

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

export default Input;
