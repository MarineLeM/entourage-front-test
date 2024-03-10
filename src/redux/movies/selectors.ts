import { RootState } from "../rootReducer";

export const selectPopularMovies = (state: RootState) => state.movies.popularList;
export const selectWhatchingMovies = (state: RootState) => state.movies.watchingList;
export const isMoviesLoading = (state: RootState) => state.movies.loading;

export const selectMovieDetailsById = (movieId: number) => (state: RootState) => {
  const allMovies = [...state.movies.extra, ...state.movies.popularList];
  return allMovies.find(movie => movie.id === movieId) || null;
};
