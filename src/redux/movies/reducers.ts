import { Movie } from "../../services/movie/types";
import { MovieAction } from "./actions";

type MoviesState = {
  extra: Movie[];
  popularList: Movie[];
  loading: boolean;
};

const initialState: MoviesState = {
  extra: [],
  popularList: [],
  loading: false,
};

export const moviesReducer = (state = initialState, action: MovieAction ): MoviesState => {
  switch (action.type) {
    case 'SET_POPULAR_MOVIES':
      return { ...state, popularList: action.payload };
    case 'ADD_MOVIES':
      return { ...state, extra: [...state.extra, ...action.payload]};
    case 'SET_MOVIES_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
