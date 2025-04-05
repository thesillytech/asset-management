import Header from '../../components/generic/Header.js'
import Error from '../../components/generic/Error.js'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import useSWR  from 'swr';

const DriversCommon = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, error } = useSWR('/api/drivers/drivers-common', fetcher)

    // state to store the selected level of a driver
    const [selectedLevel, setSelectedLevel] = useState({});

    if(error) return <Error />
    if(!data) return <div>Loading...</div>

    const drivers = data?.results
 
    // create levels from 1 to 11
    const driverLevels = Array.from({ length: 11}, (_, i) => i + 1)

    // 
    const handleLevelChange = (driverName, newLevel) => {
        setSelectedLevel({
            ...selectedLevel,
            [driverName]: newLevel
        })
    }

    // get current stats for driver based on selected level
    const getDriverStats = (driverName) => {
        // default to level 1 if no level is selected
        const level = selectedLevel[driverName] || 1

        // find driver data for this level
        const driverData = drivers.find(d =>
            d.Driver_Name === driverName && d.Level === level 
        )

        return driverData || {}
    }

    // group driver by name to create one card per driver
    const uniqueDrivers = [...new Set(drivers.map(driver => driver.Driver_Name))]

    return (
        <Box>
            <Header />
            <Grid container spacing={2} sx={css.Container}>
                <Grid size={3} sx={css.Title}>
                    <Box sx={{ marginBottom: '10px'}}>Drivers - Common</Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={css.Container}>
                {uniqueDrivers.map((driverName) => { 
                    const driverStats = getDriverStats(driverName);
                    return (
                        <Grid key={driverName}>
                            <Card sx={{ minWidth: 200 }}>
                                <CardMedia
                                    sx={{ height: 150 }}
                                    image="/images/drivers/common/albon.jpg"
                                    title={driverName}
                                />
                                <CardContent sx={{ background: '#0a192f'}}>
                                    <Box sx={{ color: '#F5F5F4', fontSize: '24px' }}>
                                        <Box>{driverName}</Box>
                                        <FormControl sx={{ minWidth: 120 }} size="small">
                                            <Select
                                                labelId={`driver_level_${driverName}`}
                                                id="driver_level"
                                                value={selectedLevel[driverName]}
                                                label="Level"
                                                onChange={(e) => handleLevelChange(driverName, e.target.value)}
                                                sx={css.Dropdown}
                                            >
                                                {driverLevels.map((level) => (
                                                    <MenuItem key={level} value={level} sx={{ background: '#0a192f', color: '#ccd6f6'}}>
                                                        {level}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Grid container spacing={2}>
                                        <Grid sx={{ color: '#F5F5F4', fontSize: '17px' }}>
                                            Overtaking <br />
                                            Defending  <br />
                                            Qualifying <br />
                                            Race Start <br />
                                            Tyre
                                        </Grid>
                                        <Grid sx={{ color: '#F5F5F4', fontSize: '17px' }}>
                                            {driverStats.Overtaking} <br />
                                            {driverStats.Defending} <br />
                                            {driverStats.Qualifying} <br />
                                            {driverStats.Race_Start} <br />
                                            {driverStats.Tyre}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
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
    },

    Dropdown: {
        border: '1px solid #ccd6f6',
        color: '#ccd6f6'
    }
}