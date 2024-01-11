import {
    createBrowserRouter
} from 'react-router-dom';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import MyFavourates from './pages/MyFavourates';
import Sidebar from './components/sidebar'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Sidebar />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/:id',
                element: <MovieDetail />
            },
            {
                path: '/favourates',
                element: <MyFavourates />
            },
        ]
    }
]);

export default router;
