import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import UserContext from '../contexts/authContext';
import { useContext } from 'react';
import useFavourates from '../hooks/useFavourates';

export default function MainFeaturedPost() {

    const ImageURL = import.meta.env.VITE_ORIGINAL_IMAGE_URL;

    const { id } = useParams();
    const { data } = useFetch({ url: 'getMovieById', params: id });
    const { loggedIn } = useContext(UserContext)
    const { addToFav, isInFavourates, removeItem } = useFavourates()

    const getImageURL = (arg?: string) => {
        return arg ? `${ImageURL}${arg}` : '/assets/no-img.png'
    }

    const handleFav = () => {
        return isInFavourates(data.id) ? removeItem(data.id) : addToFav(data.id)
    }

    return (
        data ? <Box>
            <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                height: { xs: '50vh', md: '75vh' },
                backgroundSize: '100% 75vh',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${getImageURL(data.poster_path)})`,
                mt: 5
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={getImageURL(data.poster_path)} alt={data.title} />}
                <Box position={'absolute'} left={0} mt={2}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <IconButton aria-label="back" color={'warning'} size={'large'} sx={{
                            backgroundColor: 'white'
                        }}>
                            <WestIcon />
                        </IconButton>
                    </Link>
                </Box>
            <Box
                sx={{
                    position: 'absolute',
                    p: { xs: 3 },
                    pr: { md: 0 },
                    textAlign: 'left',
                    width: '100%',
                    bottom: 0,
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,.5)',
                }}
            >
                <Typography component="h1" variant="h3" color="white" align='center' gutterBottom sx={{ color: 'white'}}>
                    {data.title}
                </Typography>
                <Typography variant='body1' align='center' fontWeight={600}>
                    {data.tagline}
                </Typography>
            </Box>
        </Paper>
        <Box>
                <Typography variant='body1' fontWeight={600}>
                    {data.overview}
                </Typography>
                <Grid container justifyContent={'space-between'} alignContent={'center'} alignItems={'center'} sx={{ textAlign: 'left', my: 4 }} spacing={4}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box whiteSpace={'nowrap'}>
                            <strong>Release Date:</strong> {new Date(data.release_date).toLocaleDateString()}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box whiteSpace={'nowrap'}>
                            <strong>Total Runtime:</strong> {data.runtime} mins.
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box whiteSpace={'nowrap'}>
                            <strong>Status:</strong> {data.status}
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <strong>
                            Popularity:
                        </strong> {data.popularity}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <strong>
                            Budget:
                        </strong> {data.budget?.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <strong>
                            Revenue:
                        </strong> {data.revenue?.toLocaleString('en-US', {
                            style: 'currency',
                        currency: 'USD',
                        })}
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'left', mb: 4 }}>
                    <span> <strong> Geners: </strong></span>
                    {
                        data.genres?.map((item: object, index: number) => <span key={index + 'genres'}> {item.name}, </span>)
                    }
                </Box>
                <Box sx={{ textAlign: 'left', mb: 4 }}>
                    <span> <strong> Available Audio: </strong></span>
                    {
                        data.spoken_languages?.map((item: object, index: number) => <span key={index + 'lan'}> {item.name}({item.english_name}), </span>)
                    }
                </Box>
                <Box>
                    { 
                        loggedIn ? <Button color='primary' variant='contained' style={{ textDecoration: 'none', color: 'white' }} sx={{ mr: 4 }} onClick={handleFav}>
                            {isInFavourates(data.id) ? 'Remove From' : 'Add To'} Favourates
                        </Button> : ''
                    }
                    
                    <Button color='primary' href={data.homepage} variant='contained' style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
                        Watch Now
                    </Button>
                </Box>
        </Box>
        </Box> : ''
    );
}