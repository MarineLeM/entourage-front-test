import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { movieService } from "../../services/movie/movies";
import { setWatchingMovies, setMoviesLoading, MovieAction } from '../../redux/movies/actions';
import { selectWhatchingMovies, isMoviesLoading } from "../../redux/movies/selectors";
import { AppDispatch } from "../../redux/store";
import { MovieList } from "../../components/MovieList/MovieList";
import { useSession } from "../../hooks/useSession";

export const WhatchingMovieList = () => {
  const { sessionId } = useSession();
  const whatchingMovies = useSelector(selectWhatchingMovies);
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector(isMoviesLoading);

  useEffect(() => {
    const fetchPopularMovies = async (sessionId: string) => {
      try {
        dispatch<MovieAction>(setMoviesLoading(true));
        const movies = await movieService.getWatchingMovies(sessionId);
        dispatch<MovieAction>(setWatchingMovies(movies));
      } catch (error) { 
        console.error('Error fetching popular movies', error);
      } finally {
        dispatch<MovieAction>(setMoviesLoading(false));
      }
    };

    if (sessionId && whatchingMovies.length === 0) {
      fetchPopularMovies(sessionId);
    }
  }, [dispatch, whatchingMovies, sessionId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home_page">
      <MovieList title="Votre liste" movieList={whatchingMovies}/>
    </div>
  )
};