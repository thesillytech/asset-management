import Header from '../../components/generic/Header.js'
import Error from '../../components/generic/Error.js'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useSWR  from 'swr';

const DriversCommon = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, error } = useSWR('/api/drivers/drivers-common', fetcher)

    const drivers = data?.results

    console.log(drivers)

    if(error) return <Error />
    if(!data) return <div>Loading...</div>

    return (
        <Box>
            <Header />
            <Grid container spacing={2} sx={css.Container}>
                <Grid size={3} sx={css.Title}>
                    <Box sx={{ marginBottom: '10px'}}>Drivers - Common</Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={css.Container}>
                {drivers.map((driver, index) => (
                    <Card sx={{ minWidth: 200 }}>
                        <CardMedia
                            sx={{ height: 150 }}
                            image="/images/drivers/common/albon.jpg"
                            title="green iguana"
                        />
                        <CardContent sx={{ background: '#0a192f'}}>
                            <Box sx={{ color: '#F5F5F4' }}>
                                {driver.Driver_Name}
                            </Box>
                            <Grid container spacing={2}>
                                <Grid sx={{ color: '#F5F5F4', fontSize: '17px' }}>
                                    {/* Overtaking <br />
                                    Defending  <br />
                                    Qualifying <br />
                                    Race Start <br />
                                    Tyre */}
                                </Grid>
                                <Grid sx={{ color: '#F5F5F4', fontSize: '17px' }}>
                                    {driver.Overtaking} <br />
                                    {driver.Defending} <br />
                                    {driver.Qualifying} <br />
                                    {driver.Race_Start} <br />
                                    {driver.Tyre}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}
            </Grid>
                        
            



            {/* {drivers.map((driver, index) => (
                <li key={index}>{JSON.stringify(driver)}</li>
            ))} */}
        </Box>
    )
}

export default DriversCommon

const css = {
    Container:{
        margin: '10px',
        padding: '10px',
        fontSize: '30px'
    }, 

    Title: {
        borderBottom: '3px solid #0a192f',
    }
}