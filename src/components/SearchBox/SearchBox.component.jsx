import React from 'react';

import { SearchBoxContainer } from './SearchBox.styles';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <SearchBoxContainer
      type="search"
      spellCheck="false"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
