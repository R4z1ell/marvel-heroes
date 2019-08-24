import styled from 'styled-components';

export const DetailsContainer = styled.div`
  max-width: 1288px;
  min-height: 67vh;
  margin: 120px auto 76px auto;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 96px;
`;

export const CharacterImage = styled.img`
  width: 299px;
  height: 299px;
  border: 4px solid #22262a;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  border: 4px solid #22262a;
  background-color: #fff;
  margin-left: 34px;
  padding: 35px;
`;

export const CharacterName = styled.h2`
  font-size: 35px;
  text-transform: uppercase;
  color: #22262a;
  margin-bottom: 35px;
`;

export const Description = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  color: #22262a;
`;
