import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import { addMovies, MovieAction, setMoviesLoading } from '../../redux/movies/actions';
import { isMoviesLoading, selectMovieDetailsById } from '../../redux/movies';
import { movieService } from '../../services/movie/movies';
import { AppDispatch } from '../../redux/store';
import './style.css';

export const MovieDetail = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const dispatch: AppDispatch = useDispatch();
  const movie = useSelector(selectMovieDetailsById(Number(movieId)));
  const loading = useSelector(isMoviesLoading);

  useEffect(() => {
    const fetchMovie = async (id: Number) => {
      try {
        dispatch<MovieAction>(setMoviesLoading(true));
        const movie = await movieService.getMovieById(id);
        dispatch<MovieAction>(addMovies([movie]));
      } catch (error) { 
        console.error('Error fetching movie', error);
      } finally {
        dispatch<MovieAction>(setMoviesLoading(false));
      }
    };

    if (!movie) {
      fetchMovie(Number(movieId));
    }
  }, [movie, movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className='movieDetail_page'>
      <img className='movieDetail_poster' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      <Typography className='movieDetail_title' variant="h4" component="h1">
        {movie.title}
      </Typography>
      <Typography className='movieDetail_description' variant="subtitle1" component="h1">
        {movie.overview}
      </Typography>
    </div>
  );
};
