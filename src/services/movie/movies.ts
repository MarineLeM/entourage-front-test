import { AxiosResponse } from 'axios';

import { api } from "../../utils/api";
import { Movie } from "./types";

type MovieService = {
  getPopularMovies: () => Promise<Movie[]>;
  getMovieById: (movieId: Number) => Promise<Movie>;
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
};
