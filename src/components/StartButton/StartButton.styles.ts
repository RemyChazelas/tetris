import styled from 'styled-components';

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 20px;
  width: 170px;
  border-radius: 10px;
  border: solid 2px #01f1b1d0;
  color: white;
  background: #2b30993a;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  @media(max-width: 500px) {
  width: 120px;
  font-size: 0.9rem;    
  }
  @media(max-width: 350px) {
    width: 105px;
  font-size: 0.7rem;
  }
  
`;