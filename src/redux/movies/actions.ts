import { Movie } from "../../services/movie/types";

//  UPDATE MOVIES REDUCER
interface SetMovies {
  type: 'SET_POPULAR_MOVIES' | 'ADD_MOVIES';
  payload: Movie[];
}

export const setPopularMovies = (movies: Movie[]): SetMovies  => ({
  type: 'SET_POPULAR_MOVIES',
  payload: movies,
});

export const addMovies = (movies: Movie[]): SetMovies  => ({
  type: 'ADD_MOVIES',
  payload: movies,
});

//  LOADING MOVIES REDUCER
interface SetMoviesLoading {
  type: 'SET_MOVIES_LOADING';
  payload: boolean;
}

export const setMoviesLoading = (isLoading: boolean): SetMoviesLoading  => ({
  type: 'SET_MOVIES_LOADING',
  payload: isLoading,
});

//  ACTION TYPE
export type MovieAction = SetMovies | SetMoviesLoading;