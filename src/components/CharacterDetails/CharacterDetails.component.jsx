import React, { Component } from 'react';

import { getCharacterDetails } from '../../utils/api-handlers';

import ComicsList from '../CharacterComics/ComicsList.component';
import Spinner from '../Spinner/Spinner.component';

import {
  DetailsContainer,
  CharacterImage,
  Wrapper,
  DescriptionContainer,
  Description,
  CharacterName
} from './CharacterDetails.styles';

const EMPTY_DESCRIPTION = 'Sorry, there is no description for this character.';

class CharacterDetails extends Component {
  state = {
    character: {},
    loading: false
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    getCharacterDetails(id)
      .then(character =>
        this.setState({
          character,
          loading: true
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { character, loading } = this.state;
    const { id } = this.props.match.params;
    const imageUrl =
      character &&
      character.thumbnail &&
      `${character.thumbnail.path}.${character.thumbnail.extension}`;

    return loading ? (
      <DetailsContainer>
        <Wrapper>
          <CharacterImage src={imageUrl} alt="featured character" />
          <DescriptionContainer>
            <CharacterName>{character.name}</CharacterName>
            <Description>
              {character.description
                ? character.description
                : EMPTY_DESCRIPTION}
            </Description>
          </DescriptionContainer>
        </Wrapper>
        <ComicsList id={id} />
      </DetailsContainer>
    ) : (
      <Spinner />
    );
  }
}

export default CharacterDetails;
