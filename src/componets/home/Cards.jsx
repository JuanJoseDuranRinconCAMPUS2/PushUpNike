import * as React from 'react';
import { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Image = 'public/background1.png'

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
}));

export default function Cards() {

    useEffect(() => {
    }, []);
    return (
        <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} className = "ContainerCard"
        sx={{
            maxWidth: '100.5%',
            backgroundImage: `url(${Image})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <Grid xs={2} sm={4} md={6} key="Start">
                <Item>
                xs=2 <br></br>
                xs=2<br></br>
                xs=2<br></br>
                xs=2<br></br>
                xs=2<br></br>
                xs=2<br></br>
                xs=2<br></br>
                xs=2<br></br>
                xs=2<br></br>
                </Item>
            </Grid>
            <Grid xs={2} sm={4} md={6} key="imgstart">
                <Item>
                <img src='public/nikeRed.png'
                style={{
                    width: '100%',
                    filter: 'drop-shadow(0rem 1rem 20px #1C2326)',
                    maxWidth: '500px',
                    objectFit: 'cover',
                    objectPosition: 'bottom'
               }}/>
                </Item>
            </Grid>
        </Grid>
        </Box>
    );
}
