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

interface Props {
    children: React.ReactNode
}

export default function ResponsiveDrawer(props: Props) {
    const { children } = props;
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
                    <Typography color={'white'} variant='h6'>
                        Movies Time
                    </Typography>
                    {
                        loggedIn && user ? 
                            <Box>{`Hello, ${user.name}`}
                                <Button color='secondary' variant="contained" onClick={logout} sx={{ml: 5}}>
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
                { children }

                {
                    openlogin ? createPortal(<LoginForm onClose={toggleLogin} handleLogIn={handleLogin} open={openlogin} />, document.body) : ''
                }
            </Box>
        </Box>
    );
}
