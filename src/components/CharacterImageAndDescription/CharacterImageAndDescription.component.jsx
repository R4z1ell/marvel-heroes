import React from 'react';
import PropTypes from 'prop-types';

import {
  CharacterImage,
  Wrapper,
  DescriptionContainer,
  Description,
  CharacterName
} from './CharacterImageAndDescription.styles';

const EMPTY_DESCRIPTION = 'Sorry, there is no description for this character.';

const CharacterImageAndDescription = ({ imageUrl, name, description }) => (
  <Wrapper>
    <CharacterImage src={imageUrl} alt="featured character" />
    <DescriptionContainer>
      <CharacterName>{name}</CharacterName>
      <Description>{description ? description : EMPTY_DESCRIPTION}</Description>
    </DescriptionContainer>
  </Wrapper>
);

CharacterImageAndDescription.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CharacterImageAndDescription;
