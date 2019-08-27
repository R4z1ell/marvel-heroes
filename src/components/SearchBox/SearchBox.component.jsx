import React from 'react';
import PropTypes from 'prop-types';

import { SearchBoxContainer } from './SearchBox.styles';

const SearchBox = ({ placeholder, handleChange }) => (
  <SearchBoxContainer
    type="search"
    spellCheck="false"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchBox;
