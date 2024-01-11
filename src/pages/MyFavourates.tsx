import { useEffect, useState } from "react";
import useFavourates from "../hooks/useFavourates";
import { Typography } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { Box, Grid } from "@mui/material";

const MyFavourates = () => {
    const { favourates } = useFavourates()
    const [favData, setFavData] = useState<object[]>([])

    const fetchFavourates = async () => {
        const promiseArr = favourates?.map((item: number) => fetch(`https://api.themoviedb.org/3/movie/${item}?api_key=837ddd7bf3645dab7c2e0b4d81c44b22`))
        const response: object[] = await Promise.all(promiseArr).then(res => {
            return Promise.all([ ...res.map(item => item.json())])
        })
        setFavData(response)
    }

    useEffect(() => {
        if (favourates.length > 0) {
            fetchFavourates()
        }
    }, [favourates])
    return (
        <>
            <Box sx={{ mt: 8}}>
                <Typography variant="h3" sx={{ mb: 4}}>
                    My Favourates
                </Typography>
                <Grid container spacing={2}>
                    {
                        favData?.map((item: object, index) => <Grid key={index + 'movie'} item key={item.id} xs={12} sm={6} md={4} > <MovieCard movie={item} key={index + 'movie'} />
                        </Grid>)
                    }
                </Grid>
            </Box></>
    )
}

export default MyFavourates;