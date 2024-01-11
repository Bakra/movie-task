import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { createPortal } from 'react-dom';
import LoginForm from '../pages/Login';

interface Props {
    children: React.ReactNode
}

export default function ResponsiveDrawer(props: Props) {
    const { children } = props;
    const [login, setLogin] = React.useState(false)

    const toggleLogin = () => setLogin(!login)

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
                    <Button color='secondary' variant="contained" onClick={toggleLogin}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                { children }
                {
                    login ? createPortal(<LoginForm onClose={toggleLogin} open={login} />, document.body) : ''
                }
            </Box>
        </Box>
    );
}
