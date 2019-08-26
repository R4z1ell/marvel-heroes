import React, { Component } from 'react';

import { getCharacterDetails } from '../../utils/api/api-handlers';

import CharacterImageAndDescription from '../../components/CharacterImageAndDescription/CharacterImageAndDescription.component';
import ComicsList from '../../components/ComicsList/ComicsList.component';
import Spinner from '../../components/Spinner/Spinner.component';

import { DetailsContainer } from './CharacterDetails.styles';

class CharacterDetailsPage extends Component {
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
        <CharacterImageAndDescription
          imageUrl={imageUrl}
          name={character.name}
          description={character.description}
        />
        <ComicsList id={id} />
      </DetailsContainer>
    ) : (
      <Spinner />
    );
  }
}

export default CharacterDetailsPage;
