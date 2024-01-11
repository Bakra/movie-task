import useFetch from "../hooks/useFetch";
import MovieCard from '../components/MovieCard.tsx';
import * as React from 'react';
import { Box, Pagination, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    const [ page, setPage ] = React.useState<number>(1)
    const [ searchQuery, setSearchQuery ] = React.useState('')

    const getParams = () => {
        if (searchQuery?.length > 3) {
            return { url: 'searchMovies', query: `query=${searchQuery}&page=${page}`};
        }
        return { url: 'getMovies', query: `page=${page}` };
    }
    const { data } = useFetch(getParams())

    const handleChange = (arg: React.SyntheticEvent, value: number) => {
        setPage(value)
    }

    const handleSearch = (e: React.SyntheticEvent) => {
        const value = (e.target as HTMLInputElement).value
        setSearchQuery(value)
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }} padding={'20px'}>
                <Box paddingY={5}>
                    <TextField type="text" value={searchQuery} onChange={handleSearch} size="small" label={'Search Movie Name'} fullWidth InputProps={{
                        endAdornment: <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    }} />
                </Box>
                <Grid container spacing={2}>
                    {
                        data?.results?.map((item: any) => <Grid item key={item.id} xs={12} sm={6} md={4} >
                            <MovieCard movie={item} />
                        </Grid>)
                    }
                </Grid>
                <Box display={'flex'} justifyContent={'center'} paddingY={20}>
                    <Pagination onChange={handleChange} count={data?.total_pages || 5} color="primary" size="large" showFirstButton showLastButton />
                </Box>
            </Box>
        </>
    )
}

export default Home;