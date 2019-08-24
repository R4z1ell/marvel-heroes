import React from 'react';

import {
  ComicCardContainer,
  CoverImage,
  Wrapper,
  ComicName,
  ComicDescription
} from './ComicCard.styles';

const ComicCard = ({ title, description, thumbnail }) => {
  const imageUrl = thumbnail && `${thumbnail.path}.${thumbnail.extension}`;
  const slicedDescription =
    description && description.length >= 350
      ? description.slice(0, 350) + '...'
      : description;

  return (
    <ComicCardContainer>
      <CoverImage src={imageUrl} alt="comic cover" />
      <Wrapper>
        <ComicName>{title}></ComicName>
        <ComicDescription>{slicedDescription}</ComicDescription>
      </Wrapper>
    </ComicCardContainer>
  );
};

export default ComicCard;
