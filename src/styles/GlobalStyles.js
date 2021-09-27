import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    background: #EEE;
  }

  body {
    font-family: sans-serif;

  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1 {
    color: ${primaryColor}
  }

  input {
    height: 30px;
    border-radius: 15px;
    border: 2px solid rgba(0, 0, 0, 0.2 );
    font-size: 14px;
    padding: 0 30px;

    &:focus {
      border: 2px solid rgba(0,0,0,0.1);
    }
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 75%;
  margin: 30px 160px;
  padding: 15px 0;

  @media (max-width: 800px) {
    max-width: 90%;
    margin: 10px;
    padding: 0;
  }
`;
