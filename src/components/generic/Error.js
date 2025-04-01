import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link'

const Error = () => {
    return (
        <Grid sx={css.ShowError}>
            <Box sx={css.Box}>Something went wrong...</Box>
            <Box sx={{ padding: 2, color: '#F5F5F4'}}><Link href="/">Back to Homepage</Link></Box>
        </Grid>
    )
}

export default Error

const css = {
    ShowError: {
        background: '#0a192f',
        color: '#F5F5F4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },

    Box: {
        padding: 2,
        borderBottom: '1px solid #F5F5F4'
    }

}