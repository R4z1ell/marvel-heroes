import styled from 'styled-components';
import { colors } from '../../global.styles';

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1360px) {
    margin: 0 auto;
    width: 86%;
  }

  @media screen and (max-width: 970px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CharacterImage = styled.img`
  width: 299px;
  height: 299px;
  border: 4px solid ${colors.mainBlack};

  @media screen and (max-width: 970px) {
    width: 200px;
    height: 200px;
    margin-bottom: 5%;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  border: 4px solid ${colors.mainBlack};
  background-color: ${colors.plainWhite};
  margin-left: 34px;
  padding: 35px;
  color: ${colors.mainBlack};

  @media screen and (max-width: 1040px) {
    width: 90%;
  }

  @media screen and (max-width: 970px) {
    margin-left: 0;
  }
`;

export const CharacterName = styled.h2`
  font-size: 35px;
  text-transform: uppercase;
  margin-bottom: 35px;

  @media screen and (max-width: 1040px) {
    font-size: 30px;
  }

  @media screen and (max-width: 970px) {
    font-size: 28px;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    font-size: 26px;
    margin-bottom: 25px;
  }
`;

export const Description = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;

  @media screen and (max-width: 1060px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 17px;
  }
`;
