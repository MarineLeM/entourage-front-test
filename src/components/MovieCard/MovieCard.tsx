import { Link } from 'react-router-dom';

import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';
import { Movie } from '../../services/movie/types';

type Props = {
  movie: Movie
};

export const MovieCard = ({ movie }: Props) => {

  return (
    <Card sx={{ width: 150 }}>
      <CardActionArea component={Link} to={`/movies/${movie.id}`}>
      <CardMedia
        component="img"
        alt={movie.title}
        image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        title={movie.title}
      />
        <CardContent sx={{ padding: '10px' }} className='movieCard_cardContent'>
          <Typography gutterBottom variant="body1">
            {movie.title}
          </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
};