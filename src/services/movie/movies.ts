import { AxiosResponse } from 'axios';

import { api } from "../../utils/api";
import { Movie } from "./types";

type MovieService = {
  getMovieById: (movieId: Number) => Promise<Movie>;
  getPopularMovies: () => Promise<Movie[]>;
  getSimilarMovies: (movieId: Number) => Promise<Movie[]>;
}

export const movieService: MovieService = {
  getPopularMovies: async (): Promise<Movie[]> => {
    try {
      const response: AxiosResponse<{ results: Movie[]}> = await api.get('/movie/popular');
      return response.data.results;
    } catch (error) {
      throw new Error('Error fetching movies');
    }
  },

  getMovieById: async (movieId: Number): Promise<Movie> => {
    try {
      const response: AxiosResponse<Movie> = await api.get(`/movie/${movieId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching movie');
    }
  },

  getSimilarMovies: async (movieId: Number): Promise<Movie[]> => {
    try {
      const response: AxiosResponse<{ results: Movie[]}> = await api.get(`/movie/${movieId}/similar`);
      return response.data.results;
    } catch (error) {
      throw new Error('Error fetching similar movies');
    }
  }
};
