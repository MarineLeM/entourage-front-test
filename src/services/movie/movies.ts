import { AxiosResponse } from 'axios';

import { api } from "../../utils/api";
import { Movie } from "./types";

type MovieService = {
  getMovieById: (movieId: Number) => Promise<Movie>;
  getPopularMovies: () => Promise<Movie[]>;
  getSimilarMovies: (movieId: Number) => Promise<Movie[]>;
  getWatchingMovies: (sessionId: string) => Promise<Movie[]>;
  addToWatchlist: (sessionId: string, movieId: Number) => Promise<void>;
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
  },

  getWatchingMovies: async (sessionId: string): Promise<Movie[]> => {
    try {
      const response: AxiosResponse<{ results: Movie[]}> = await api.get(`/account/guest/watchlist/movies`, {
        params: {
          guest_session_id: sessionId
        }
      });
      return response.data.results;
    } catch (error) {
      throw new Error('Error fetching watching movies');
    }
  },

  addToWatchlist: async (sessionId: string, movieId: Number): Promise<void> => {
    try {
     await api.post(`/account/guest/watchlist`, {
        media_type: 'movie',
        media_id: movieId,
        watchlist: true
      }, {
        params: {
          guest_session_id: sessionId
        }
      });
    } catch (error) {
      throw new Error('Error adding movie to watchlist');
    }
  }
};
