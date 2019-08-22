import React, { Component } from 'react';
import {
  getCharacterDetails,
  getCharacterComics
} from '../../utils/api-handlers';

class CharacterDetails extends Component {
  state = {
    characters: {},
    comics: [],
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

    getCharacterComics(id)
      .then(comics =>
        this.setState({
          comics
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return <div>CharacterDetails</div>;
  }
}

export default CharacterDetails;
