import { useState, useEffect } from "react";

interface apiURLSInfo {
    [key: string]: string
}
interface UseFetchProps {
    url?: keyof typeof apiUrls | string;
    query?: string,
    params?: string | number
}

const BaseURL = 'https://api.themoviedb.org/3'
const APIKEY = '837ddd7bf3645dab7c2e0b4d81c44b22'

const apiUrls: apiURLSInfo = {
    getMovies: 'movie/popular',
    searchMovies: 'search/movie',
    getMovieById: 'movie'
}

const useFetch = ({ url ='getMovies', query='', params = '' }: UseFetchProps) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const getURL = apiUrls[url] ? `${BaseURL}/${apiUrls[url]}${params ? `/${params}` : ''}?api_key=${APIKEY}&language=en-US&${query}` : url
            try {
                const response = await fetch(getURL);
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(true);
            }
        }
        if (url) {
            fetchData();
        }
    }, [url, query]);

    return { data, error };
};

export default useFetch;