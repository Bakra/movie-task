import './App.css'
import {
  RouterProvider,
} from 'react-router-dom';
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
