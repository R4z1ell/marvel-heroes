import axios from 'axios';
import { API_PUBLIC_KEY } from './apikey';

const API_BASE_URL = 'https://gateway.marvel.com/v1/public';
const API_CHARACTERS_URL = `${API_BASE_URL}/characters`;
const API_PUBLIC_KEY_STRING = `apikey=${API_PUBLIC_KEY}`;

const getCharactersList = async (limit = 24) => {
  const params = `?limit=${limit}&`;
  const response = await axios.get(
    `${API_CHARACTERS_URL}${params}${API_PUBLIC_KEY_STRING}`
  );
  const { results } = await response.data.data;

  return results;
};

const getCharacterDetails = async (id = 1009664) => {
  const response = await axios.get(
    `${API_CHARACTERS_URL}/${id}?${API_PUBLIC_KEY_STRING}`
  );
  const { results } = await response.data.data;

  return results[0];
};

const getCharacterComics = async (id = 1009664) => {
  const response = await axios.get(
    `${API_CHARACTERS_URL}/${id}/comics?${API_PUBLIC_KEY_STRING}`
  );
  const { results } = await response.data.data;

  return results;
};

export { getCharactersList, getCharacterDetails, getCharacterComics };
