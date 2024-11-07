import styled from "styled-components";

export const ButtonsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 5px;
margin-top: 20px;

@media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 480px) {
  grid-template-columns: 1fr; 
}
`;