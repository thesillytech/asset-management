import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={css.Appbar}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'right'}}>
                    <Button color="inherit" sx={css.ButtonStyle}>01.Drivers</Button>
                    <Button color="inherit" sx={css.ButtonStyle}>02.Components</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header 

const css = {
    Appbar: {
        backgroundColor: '#0a192f',
    }, 

    ButtonStyle: {
        fontFamily: 'Roboto Mono',
        color: '#ccd6f6',
        textAlign: 'right',
        '&:hover': {
            color: '#64ffda'
        }
    }
}

//