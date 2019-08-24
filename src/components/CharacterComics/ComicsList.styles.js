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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const EmptyMessage = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  align-self: center;
`;
