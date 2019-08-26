import React from 'react';
import PropTypes from 'prop-types';

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

ComicCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnail: PropTypes.object.isRequired
};

export default ComicCard;
