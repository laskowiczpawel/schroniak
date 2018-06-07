import styled from 'styled-components';
import { colors } from '../../../utils/styles';

export const Element = styled.div`
  color: white;
  width: 150px;
  height: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #323232;
    cursor: pointer;
    color: ${colors.primaryColor};
  }
`;
