import { Typography } from "@mui/material";
import { Movie } from "../../services/movie/types";
import { MovieCard } from "../MovieCard/MovieCard";
import './style.css';

type Props = {
  title: string;
  movieList: Movie[];
};

export const MovieList = ({ title, movieList }: Props) => {

  return (
    <div className="list_content">
      <Typography variant="h5" component="div">
          {title}
        </Typography>
        
      <div className="list_list">
        {movieList.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};