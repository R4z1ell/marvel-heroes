import React, { Component } from 'react';
import { debounce } from 'lodash';

import {
  getCharactersList,
  searchCharactersByName
} from '../../utils/api-handlers';

import CharacterCard from '../CharacterCard/CharacterCard.component';
import SearchBox from '../SearchBox/SearchBox.component';
import Spinner from '../Spinner/Spinner.component';

import { ListContainer } from './CharactersList.styles';

class CharactersList extends Component {
  state = {
    characters: [],
    searchField: '',
    loading: false
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = () => {
    getCharactersList()
      .then(characters =>
        this.setState({
          characters,
          loading: true
        })
      )
      .catch(err => console.log(err));
  };

  handleChange = debounce(searchField => {
    this.setState({ searchField, loading: false });

    if (searchField.length !== 0) {
      searchCharactersByName(searchField)
        .then(characters =>
          this.setState({
            characters,
            loading: true
          })
        )
        .catch(err => console.log(err));
    } else {
      this.fetchCharacters();
    }
  }, 800);

  render() {
    const { characters, loading } = this.state;

    return (
      <>
        <SearchBox
          placeholder="Search by character's name"
          handleChange={event => this.handleChange(event.target.value)}
        />
        {loading ? (
          <ListContainer>
            {characters.length !== 0 ? (
              characters.map(character => (
                <CharacterCard
                  name={character.name}
                  thumbnail={character.thumbnail}
                  key={character.id}
                  id={character.id}
                />
              ))
            ) : (
              <p>Nothing found, try with a new research</p>
            )}
          </ListContainer>
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

export default CharactersList;
