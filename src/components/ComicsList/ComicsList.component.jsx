import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCharacterComics } from '../../utils/api/api-handlers';

import ComicCard from '../ComicCard/ComicCard.component';
import Spinner from '../Spinner/Spinner.component';

import {
  ComicsContainer,
  ComicsLabelWrapper,
  Label,
  ComicsCardWrapper,
  EmptyMessage
} from './ComicsList.styles';

const EMPTY_COMICS = 'Sorry, there are no comics for this character.';

export class ComicsList extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  state = {
    comics: [],
    loading: false
  };

  componentDidMount() {
    const { id } = this.props;

    getCharacterComics(id)
      .then(comics =>
        this.setState({
          comics,
          loading: true
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { comics, loading } = this.state;

    return loading ? (
      <ComicsContainer>
        <ComicsLabelWrapper>
          <Label>Comics</Label>
        </ComicsLabelWrapper>
        {comics.length === 0 && <EmptyMessage>{EMPTY_COMICS}</EmptyMessage>}
        <ComicsCardWrapper>
          {comics.map(comic => (
            <ComicCard {...comic} key={comic.id} />
          ))}
        </ComicsCardWrapper>
      </ComicsContainer>
    ) : (
      <Spinner />
    );
  }
}

export default ComicsList;
