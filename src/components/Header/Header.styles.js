import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 87px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #22262a;
`;

export const LogoContainer = styled(Link)`
  display: inline-block;
  height: 52px;
  width: fit-content;
`;
