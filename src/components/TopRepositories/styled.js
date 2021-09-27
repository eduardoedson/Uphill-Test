import styled from 'styled-components';
import { primaryColor } from '../../styles/colors';

export const Title = styled.h1`
  color: ${primaryColor};
  font-weight: 400;
`;

export const CardsContainers = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
  height: 200px;
  border-top: 6px solid ${(props) => props.borderColor};
  padding: 30px 25px;
  text-align: center;
  background: white;

  #title {
    font-weight: bold;
    color: black;
    font-size: 17px;
    background: rgba(0, 0, 0, 0);
  }

  #star-container {
    color: #1d42a2;
    margin: 20px 0;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0);

    svg {
      color: white;
      width: 19px;
      height: 19px;
      font-size: 12px;
      margin-right: 3px;
      background-color: #1d42a2;
      padding: 4px;
      border-radius: 50%;
    }

    span {
      font-weight: 100;
      background: rgba(0, 0, 0, 0);
      font-size: 15px;
    }
  }

  #desc {
    font-size: 12px;
    text-align: justify;
    color: #8c8b8b;
    background: rgba(0, 0, 0, 0);
  }
`;
