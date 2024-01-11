import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import NoImage from '../assets/no-img.png';
import { Link } from 'react-router-dom';

const ImageURL = 'https://image.tmdb.org/t/p/w500/';

interface MovieProps {
  movie: {
    poster_path: string,
    id: number,
    original_title: string,
    release_date: string,
    popularity: string
  };
}

const MovieCard = ({ movie }: MovieProps) => {

  return (
    <Link to={`/${movie.id}`}>
      <Card raised sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <CardMedia
            sx={{ height: 300, objectFit: 'contain', backgroundPosition: 'top' }}
            image={movie.poster_path ? `${ImageURL}${movie.poster_path}` : NoImage}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {movie.original_title}
            </Typography>
          </CardContent>
        </Box>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 2 }}>
          <Typography variant='caption'>
            Released on: <strong> {movie.release_date} </strong>
          </Typography>
          <Divider />
          <Typography variant='caption'>
            Popularity: <strong> {movie.popularity} </strong>
          </Typography>
        </CardActions>
      </Card>
      </Link>
  );
}

export default MovieCard;