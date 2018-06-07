import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const Container = styled.div`
  background-color: ${colors.textColor};
  width: 100%;
  height: 70px;
  display: flex;
`;

export const Logo = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  margin-left: 15px;

  > svg {
    width: 300px;
  }
`;

export const Texts = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Museo', sans-serif;
`;

export const Textlogo = styled.div`
  font-size: 20px;
`;

export const Text = styled.div`
  font-size: 14px;
`;

export const Navi = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  margin-right: 15px;
`;
