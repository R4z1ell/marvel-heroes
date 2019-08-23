import React from 'react';

import { ComicCardContainer, CoverImage } from './ComicCard.styles';

const ComicCard = ({ title, description, thumbnail }) => {
  const imageUrl = thumbnail && `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <ComicCardContainer>
      <CoverImage src={imageUrl} alt="comic cover" />
      <div className="sfondo-bianco">
        <h2>{title}></h2>
        <p>{description}</p>
      </div>
    </ComicCardContainer>
  );
};

export default ComicCard;
