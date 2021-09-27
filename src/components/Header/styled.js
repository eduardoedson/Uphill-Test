import styled from 'styled-components';
import { primaryColor } from '../../styles/colors';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${primaryColor};
  padding: 10px 165px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 10px;

    img {
      margin: 10px;
    }
  }

  img {
    background: rgba(0, 0, 0, 0);
    filter: brightness(0) invert(1);
  }
`;

export const Title = styled.h1`
  background: ${primaryColor};
  color: white;
  font-size: 30px;
  text-transform: uppercase;
`;
