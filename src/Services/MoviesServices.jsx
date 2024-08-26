import { API_KEY, BASE_URL } from '../api/tmdb';
import axios from 'axios';

export const getTopRatedMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovieGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return response.data.genres;
};

export const getMoviesByGenre = async (genreId) => {
  const response = await axios.get(`${BASE_URL}/discover/movie?with_genres=${genreId}&api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovieCredits = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
        params: {
          api_key: API_KEY,
          language: 'pt-BR'
        }
      });
      return response.data.cast;
    } catch (error) {
      console.error(`Erro ao buscar créditos do filme ${movieId}:`, error);
      return [];
    }
  };
  
  export const getTVCredits = async (tvId) => {
    try {
      const response = await axios.get(`${BASE_URL}/tv/${tvId}/credits`, {
        params: {
          api_key: API_KEY,
          language: 'pt-BR'
        }
      });
      return response.data.cast;
    } catch (error) {
      console.error(`Erro ao buscar créditos da série ${tvId}:`, error);
      return [];
    }
  };
  