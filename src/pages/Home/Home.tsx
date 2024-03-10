import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { movieService } from "../../services/movie/movies";
import { setPopularMovies, setMoviesLoading, MovieAction } from '../../redux/movies/actions';
import { selectPopularMovies, isMoviesLoading } from "../../redux/movies/selectors";
import { AppDispatch } from "../../redux/store";
import { MovieList } from "../../components/MovieList/MovieList";

export const Home = () => {
  const [hasError, setHasError] = useState<boolean>(false); 
  const dispatch: AppDispatch = useDispatch();
  const popularMovies = useSelector(selectPopularMovies);
  const loading = useSelector(isMoviesLoading);
  
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        dispatch<MovieAction>(setMoviesLoading(true));
        const movies = await movieService.getPopularMovies();
        dispatch<MovieAction>(setPopularMovies(movies));
      } catch (error) { 
        setHasError(true); 
      } finally {
        dispatch<MovieAction>(setMoviesLoading(false));
      }
    };

    if (popularMovies.length === 0) {
      fetchPopularMovies();
    }
  }, [dispatch, popularMovies]);

  const handleCloseSnackbar = () => {
    setHasError(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home_page">
      <MovieList title="Films populaires" movieList={popularMovies}/>
      <Snackbar
        open={hasError}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={"Une erreur est survenue"}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
};