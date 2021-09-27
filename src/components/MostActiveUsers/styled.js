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
  height: 350px;

  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.bgImg});
  background-size: 100% 60px;
  background-repeat: no-repeat;
  transition: all 0.9s ease;
  background-color: white;

  img {
    margin: 15px 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  #separator {
    width: 80%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 15px 0;
  }

  #name,
  #email,
  #followers {
    font-weight: bold;
    color: ${primaryColor};
    margin: 4px 0;
    font-size: 17px;
    background-color: rgba(0, 0, 0, 0);
  }

  #email {
    font-size: 13px;
    font-weight: 400;
  }

  #followers {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 14px;
    font-weight: 400;

    svg {
      margin: 0 5px;
      font-size: 15px;
      background-color: rgba(0, 0, 0, 0);
    }

    small {
      color: #8c8b8b;
      background-color: rgba(0, 0, 0, 0);
    }

    #numbers {
      font-weight: bold;
      color: black;
      background-color: rgba(0, 0, 0, 0);
    }
  }

  #project-container {
    width: 80%;
    border: 1.5px solid #1d42a2;
    border-left-width: 6px;
    border-radius: 6px;
    padding: 3px 15px;
    margin: 8px 0;
    background-color: rgba(0, 0, 0, 0);
  }

  #project-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    color: #1d42a2;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0);

    span {
      background-color: rgba(0, 0, 0, 0);
    }

    div {
      display: flex;
      align-items: center;
      background-color: rgba(0, 0, 0, 0);
    }

    svg {
      width: 19px;
      height: 19px;
      font-size: 12px;
      margin-right: 3px;
      background-color: #1d42a2;
      background-color: rgba(0, 0, 0, 0);
      padding: 4px;
      border-radius: 50%;
    }
  }

  #project-desc {
    color: #8c8b8b;
    font-size: 11px;
    text-align: justify;
    margin: 3px 0;
    background-color: rgba(0, 0, 0, 0);
  }

  #button-container {
    display: none;
  }

  &:hover {
    background-size: cover;

    #separator,
    #project-container {
      display: none;
    }

    #button-container {
      display: flex;
      margin: 15px 0;
      background: rgba(0, 0, 0, 0);
      border: 2px solid white;
      padding: 12px 25px;
      border-radius: 20px;
    }

    #button-container a {
      background: rgba(0, 0, 0, 0);
      color: white;
      font-size: 12px;
    }

    #name,
    #email,
    #followers {
      color: white;

      #numbers,
      small {
        color: white;
      }
    }
  }
`;
