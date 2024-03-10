import { Typography } from "@mui/material";
import { Movie } from "../../services/movie/types";
import { MovieCard } from "../MovieCard/MovieCard";
import './style.css';

type Props = {
  title: string;
  movieList: Movie[];
  additionalClassName?: string;
};

export const MovieList = ({ title, movieList, additionalClassName }: Props) => {

  return (
    <div className={`list_container ${additionalClassName}`}>
      <Typography variant="h5" component="div">
          {title}
        </Typography>
        
      <div className="list_list">
        {movieList.length === 0 && <div>No movies found</div>}
        {movieList.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};