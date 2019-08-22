import React, { Component } from 'react';

import { getCharactersList } from '../../utils/api-handlers';

import CharacterCard from '../CharacterCard/CharacterCard.component';
import Spinner from '../Spinner/Spinner.component';

import { ListContainer } from './CharactersList.styles';

class CharactersList extends Component {
  state = {
    characters: [],
    loading: false
  };

  componentDidMount() {
    getCharactersList()
      .then(characters =>
        this.setState({
          characters,
          loading: true
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { characters, loading } = this.state;

    return loading ? (
      <ListContainer>
        {characters.map(character => (
          <CharacterCard
            name={character.name}
            thumbnail={character.thumbnail}
            key={character.id}
            id={character.id}
          />
        ))}
      </ListContainer>
    ) : (
      <Spinner />
    );
  }
}

export default CharactersList;
