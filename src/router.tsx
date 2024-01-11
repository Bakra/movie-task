import {
    createBrowserRouter
} from 'react-router-dom';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/:id',
        element: <MovieDetail />
    },
]);

export default router;
