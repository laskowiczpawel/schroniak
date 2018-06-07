import styled from 'styled-components';
import { colors, typography } from '../../utils/styles';

export const Animal = styled.div`
  border: 1px solid #ddd;
  box-shadow: 7px 7px 7px #ddd;
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 40%;
  height: 250px;
  padding: 20px;
  margin: 20px;
  float: left;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 90%;
    float: none;
  }

  @media (max-width: 740px) {
    height: 270px;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    height: 430px;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: 740px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 580px) {
    display: block;
    margin: 0 auto;
  }
`;

export const Data = styled.div`
  margin-left: 1em;

  @media (max-width: 580px) {
    display: block;
    margin: 0 auto;
  }
`;

export const Name = styled.h1`
  font-family: ${typography.mainFamily};
  font-weight: ${typography.mediumWeight};
  font-weight: 500;
  font-size: 24px;

  @media (max-width: 740px) {
    font-size: 20px;
  }
`;

export const Shelter = styled.p`
  color: ${colors.lightTextColor};
  font-family: ${typography.mainFamily};
  font-weight: ${typography.mediumWeight};
  font-size: 14px;

  @media (max-width: 740px) {
    font-size: 90%;
  }
`;

export const Location = styled.p`
  color: ${colors.lightTextColor};
  font-family: ${typography.mainFamily};
  font-weight: ${typography.mediumWeight};
  font-size: 14px;

  &::before {
    content: url(../../../icons/ic_place.svg);
  }

  @media (max-width: 740px) {
    font-size: 90%;
  }
`;

export const Foundation = styled.p`
  color: ${colors.lightTextColor};
  font-family: ${typography.mainFamily};
  font-weight: ${typography.mediumWeight};
  font-size: 14px;

  @media (max-width: 740px) {
    font-size: 90%;
  }
`;

export const Age = styled.p`
  color: ${colors.lightTextColor};
  font-family: ${typography.mainFamily};
  font-weight: ${typography.mediumWeight};
  font-size: 14px;

  &::before {
    content: url(../../../icons/ic_event.svg);
  }

  @media (max-width: 740px) {
    font-size: 90%;
  }
`;

export const Description = styled.p`
  color: ${colors.lightTextColor};
  font-family: ${typography.mainFamily};
  font-weight: ${typography.lightWeight};
  font-size: 14px;
  text-align: justify;

  @media (max-width: 740px) {
    font-size: 90%;
  }
`;
