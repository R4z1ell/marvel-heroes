import styled from 'styled-components';
import { colors } from '../../global.styles';

export const CoverImage = styled.img`
  width: 289px;
  height: 404px;
  border: 4px solid ${colors.mainBlack};
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 4px;
  bottom: -97.1%;
  width: 281px;
  height: 396px;
  background-color: ${colors.plainWhite};
  padding: 25px;
  transition: all 0.7s;
`;

export const ComicCardContainer = styled.div`
  position: relative;
  height: 404px;
  overflow: hidden;
  margin-bottom: 44px;
  box-shadow: 0 26px 24px -14px ${colors.lightBlack};
  z-index: 30;

  &::before {
    bottom: 0px;
    position: absolute;
    content: '';
    width: 289px;
    height: 4px;
    background-color: ${colors.mainBlack};
    z-index: 1;
  }

  &:hover ${Wrapper} {
    bottom: 4px;
    transition: all 0.7s;
  }
`;

export const ComicName = styled.h2`
  margin-bottom: 20px;
`;

export const ComicDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
`;
