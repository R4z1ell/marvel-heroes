import styled from 'styled-components';
import { colors } from '../../global.styles';

export const CardBody = styled.div`
  position: relative;
  background-color: ${colors.mainBlack};
  height: 130px;
  padding: 20px;
  overflow: hidden;
  z-index: 30;

  &::before {
    background: ${colors.mainRed};
    bottom: 100%;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition: transform 0.3s;
    width: 100%;
    z-index: -1;
  }
`;

export const Image = styled.img`
  transform: scaleX(1);
  transition: all 0.2s linear;
  overflow: hidden;
  object-position: top center;
  object-fit: cover;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const CardContainer = styled.div`
  margin: 17.5px 0;

  &:hover {
    ${Image} {
      transform: scale3d(1.05, 1.05, 1);
    }

    ${CardBody}::before {
      transform: translate3d(0, 100%, 0);
    }
  }
`;

export const CardFrame = styled.div`
  background: ${colors.mainRed};
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

export const ImageWrapper = styled.figure`
  position: relative;
  overflow: hidden;
  height: 183px;

  &::after {
    height: 4px;
    content: '';
    background-color: ${colors.mainRed};
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export const CharacterName = styled.p`
  color: ${colors.plainWhite};
  font-size: 16px;
  text-transform: uppercase;
  text-align: left;
`;
