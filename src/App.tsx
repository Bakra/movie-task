import './App.css'
import SideBar from './components/sidebar';
import {
  RouterProvider,
} from 'react-router-dom';
import { Box } from '@mui/material';
import router from './router';

function App() {

  return (
    <>
      <SideBar>
        <Box>
          <RouterProvider router={router} />
        </Box>
      </SideBar>
    </>
  )
}

export default App
