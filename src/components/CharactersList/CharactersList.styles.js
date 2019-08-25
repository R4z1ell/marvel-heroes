import styled, { css } from 'styled-components';

const gridStyle = css`
  grid-template-columns: repeat(1, 1fr);
`;

const checkWindowSize = ({ characters }) => {
  if (characters.length === 0) {
    return gridStyle;
  }
};

export const ListContainer = styled.div`
  display: grid;
  padding-bottom: 145px;
  margin-top: 60px;
  grid-template-columns: repeat(6, 194px);
  grid-column-gap: 40px;
  ${checkWindowSize}

  @media screen and (max-width: 1420px) {
    grid-template-columns: repeat(5, 194px);
    justify-content: center;
    ${checkWindowSize}
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 194px);
    ${checkWindowSize}
  }

  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(3, 194px);
    ${checkWindowSize}
  }

  @media screen and (max-width: 715px) {
    grid-template-columns: repeat(2, 194px);
    ${checkWindowSize}
  }
`;
