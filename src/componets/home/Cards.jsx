import * as React from 'react';
import { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import { getProducts } from '../../services/gProducts';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Cards() {

    const [dataProducts, setdataProducts] = useState([]);

    useEffect(() => {

        const ContainerCard= document.querySelector(".ContainerCard");
        ContainerCard.addEventListener('click', (e)=>{
            e.preventDefault();
            setdataProducts(getProducts());
            console.log(dataProducts);
        });
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className = "ContainerCard">
            {Array.from(Array(6)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
                <Item>xs=2</Item>
            </Grid>
            ))}
        </Grid>
        </Box>
    );
}
