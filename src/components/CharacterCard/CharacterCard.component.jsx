import React from 'react';
import { Link } from 'react-router-dom';

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
            <Image src={imgUrl} alt="image" />
          </ImageWrapper>
        </CardFrame>
        <CardBody>
          <CharacterName>{name}</CharacterName>
        </CardBody>
      </Link>
    </CardContainer>
  );
};

export default CharacterCard;
