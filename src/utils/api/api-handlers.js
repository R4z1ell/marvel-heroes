import axios from 'axios';

const API_PUBLIC_KEY = process.env.REACT_APP_API_PUBLIC_KEY;
const API_BASE_URL = 'https://gateway.marvel.com/v1/public';
const API_CHARACTERS_URL = `${API_BASE_URL}/characters`;
const API_KEY_PARAM = `apikey=${API_PUBLIC_KEY}`;

const getCharactersList = async (limit = 24) => {
  const params = `?limit=${limit}&`;
  const response = await axios.get(
    `${API_CHARACTERS_URL}${params}${API_KEY_PARAM}`
  );

  const { results } = await response.data.data;

  return results;
};

const searchCharactersByName = async name => {
  const response = await axios.get(
    `${API_CHARACTERS_URL}?nameStartsWith=${name}&${API_KEY_PARAM}`
  );

  const { results } = await response.data.data;

  return results;
};

const getCharacterDetails = async id => {
  const response = await axios.get(
    `${API_CHARACTERS_URL}/${id}?${API_KEY_PARAM}`
  );
  const { results } = await response.data.data;

  return results[0];
};

const getCharacterComics = async id => {
  const response = await axios.get(
    `${API_CHARACTERS_URL}/${id}/comics?${API_KEY_PARAM}`
  );
  const { results } = await response.data.data;

  return results;
};

export {
  getCharactersList,
  getCharacterDetails,
  getCharacterComics,
  searchCharactersByName
};
