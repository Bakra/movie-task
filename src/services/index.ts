const API_KEY = '837ddd7bf3645dab7c2e0b4d81c44b22'


export const getMovies = () => {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
}