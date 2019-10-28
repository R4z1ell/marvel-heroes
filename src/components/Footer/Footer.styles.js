import styled from 'styled-components';
import { colors } from '../../global.styles';

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.mainBlack};
`;

export const Copyright = styled.p`
  font-size: 16px;
  color: ${colors.plainWhite};
`;
