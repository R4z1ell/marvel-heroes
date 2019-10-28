import styled from 'styled-components';
import { colors } from '../../global.styles';

export const SearchBoxContainer = styled.input`
  font-family: 'Roboto Condensed';
  font-weight: 700;
  width: 643px;
  height: 56px;
  font-size: 16px;
  border: 4px solid ${colors.mainBlack};
  padding: 20px;
  margin-top: 60px;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 715px) {
    width: 89%;
  }
`;
