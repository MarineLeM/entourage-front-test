import { Movie } from "../../services/movie/types";
import { MovieAction } from "./actions";

type MoviesState = {
  extra: Movie[];
  popularList: Movie[];
  watchingList: Movie[];
  loading: boolean;
};

const initialState: MoviesState = {
  extra: [],
  popularList: [],
  watchingList: [],
  loading: false,
};

export const moviesReducer = (state = initialState, action: MovieAction ): MoviesState => {
  switch (action.type) {
    case 'SET_POPULAR_MOVIES':
      return { ...state, popularList: action.payload };
    case 'SET_WATCHING_MOVIES':
      return { ...state, watchingList: action.payload };
    case 'ADD_WATCHING_MOVIES':
      return { ...state, watchingList: [...state.watchingList, ...action.payload]};
    case 'ADD_MOVIES':
      return { ...state, extra: [...state.extra, ...action.payload]};
    case 'SET_MOVIES_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
