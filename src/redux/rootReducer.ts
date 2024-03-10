import { combineReducers } from 'redux';
import { moviesReducer } from './movies/reducers';
import { sessionReducer } from './session/reducers';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  session: sessionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
