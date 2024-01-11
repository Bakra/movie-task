import './App.css'
import SideBar from './components/sidebar';
import {
  RouterProvider,
} from 'react-router-dom';
import { Box } from '@mui/material';
import router from './router';
import { UserProvider } from './contexts/authContext';

function App() {

  return (
    <>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </>
  )
}

export default App
