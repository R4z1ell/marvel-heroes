import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../global.styles';

export const HeaderContainer = styled.div`
  height: 87px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.mainBlack};
`;

export const LogoContainer = styled(Link)`
  display: inline-block;
  height: 52px;
  width: fit-content;
`;
