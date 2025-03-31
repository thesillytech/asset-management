import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={css.Appbar}>
                <Toolbar>
                    <Button color="inherit">Drivers</Button>
                    <Button color="inherit">Component</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header 

const css = {
    Appbar: {
        backgroundColor: '#0a192f',
    }
}