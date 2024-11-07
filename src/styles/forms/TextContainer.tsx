import styled from "styled-components";

export const TextContainer = styled.div`
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

  @media (max-width: 425px) {
    width: 70%;
  }

  @media (max-width: 375px) {
    width: 60%;
  }

  @media (max-width: 320px) {
    width: 55%;
  }
`;