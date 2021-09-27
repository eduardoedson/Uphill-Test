import styled from 'styled-components';
import { primaryColor } from '../../styles/colors';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0);

  svg {
    color: ${primaryColor};
    background: rgba(0, 0, 0, 0);
    position: absolute;
    margin-left: 10px;
    margin-top: 6px;
  }
`;
