import styled from 'styled-components';

export const ComicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
`;

export const ComicsLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 162px;
  height: 74px;
  margin-bottom: 70px;
  background-color: #fff;
  border: 4px solid #22262a;
`;

export const Label = styled.p`
  font-size: 25px;
  text-transform: uppercase;
  color: #22262a;
`;

export const ComicsCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 289px);
  grid-column-gap: 44px;

  @media screen and (max-width: 1360px) {
    grid-template-columns: repeat(3, 289px);
    justify-content: center;
  }

  @media screen and (max-width: 1040px) {
    grid-template-columns: repeat(2, 289px);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 289px);
  }
`;

export const EmptyMessage = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  align-self: center;
`;
