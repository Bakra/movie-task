import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { createPortal } from 'react-dom';
import LoginForm from '../pages/Login';
import UserContext from '../contexts/authContext';
import { Outlet, Link } from 'react-router-dom';

export default function ResponsiveDrawer() {

    const [openlogin, setLogin] = React.useState(false)
    const { loggedIn, user, logout, login } = React.useContext(UserContext)
    
    const toggleLogin = () => {
        setLogin(!openlogin)
    }

    const handleLogin = (arg?: unknown) => {
        login(arg)
        toggleLogin()
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
            >
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Box display={'flex'}>
                        <Typography color={'white'} variant='h6' sx={{ mr: 4}}>
                            Movies Time
                        </Typography>
                        <Link to={'/'}>
                            <Typography color={'white'} variant='h6'>
                                Home
                            </Typography>
                        </Link>
                    </Box>
                    {
                        loggedIn && user ? 
                            <Box display={'flex'}>
                                <Link to='/favourates'>
                                    <Typography color={'white'} variant='h6'>
                                        Favourates
                                    </Typography>
                                </Link>

                                <Typography color={'white'} variant='h6' sx={{mx: 4}}>
                                    {`Hello, ${user.name}`}
                                </Typography>

                                <Button color='secondary' variant="contained" onClick={logout}>
                                    Log Out
                                </Button>
                            </Box> : <Button color='secondary' variant="contained" onClick={() => toggleLogin(true)}>
                        Login
                        </Button>
                    }
                    
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Outlet />

                {
                    openlogin ? createPortal(<LoginForm onClose={toggleLogin} handleLogIn={handleLogin} open={openlogin} />, document.body) : ''
                }
            </Box>
        </Box>
    );
}
