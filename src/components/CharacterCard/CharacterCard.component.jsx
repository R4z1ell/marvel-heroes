import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  CardContainer,
  CardFrame,
  CardBody,
  ImageWrapper,
  Image,
  CharacterName
} from './CharacterCard.styles';

const CharacterCard = ({ name, thumbnail, id }) => {
  const imgUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <CardContainer>
      <Link to={`/character/${id}`}>
        <CardFrame>
          <ImageWrapper>
            <Image src={imgUrl} alt="character thumbnail" />
          </ImageWrapper>
        </CardFrame>
        <CardBody>
          <CharacterName>{name}</CharacterName>
        </CardBody>
      </Link>
    </CardContainer>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default CharacterCard;
