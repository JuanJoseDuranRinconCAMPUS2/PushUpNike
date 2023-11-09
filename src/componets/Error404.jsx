import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Error404() {

     useEffect(() => {
    
    }, []);
  
    return (
        <>
           <Box 
           sx={{ 
                width: '100%', 
                height: '100%',
                display : 'flex', justifyContent: 'center', alignItems : 'center', py: 20, 
                backgroundImage: 'url("https://img.freepik.com/foto-gratis/superficie-metal-rayado-estilo-grunge-oscuro_1048-12951.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698969600&semt=ais")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
           >
                <Stack spacing={2}>
                <Typography
                            sx={{
                                opacity: 0.9,
                                textTransform: 'uppercase',
                                mt: 12,
                                display: 'block',
                                fontSize: "3rem",
                                textAlign: 'center',
                                fontWeight: 700,
                                fontFamily: 'monospace',
                                whiteSpace: 'nowrap',
                                color: 'white',
                                borderRight: '4px solid',
                                borderLeft: '4px solid',
                            }}
                        >
                        Error404
                        </Typography>
                        <Box
                            sx={{
                                opacity: 0.8,
                                textTransform: 'uppercase',
                                display: 'block',
                                color: "#fee0ff",
                                borderRadius: '10%',
                                overflow: 'hidden',
                                borderRight: '4px solid',
                                borderLeft: '4px solid',
                        }}>
                            <img src='https://d500.epimg.net/cincodias/imagenes/2021/02/02/lifestyle/1612279180_420492_1612280054_noticia_normal.jpg' loading="lazy"/>
                        </Box>
                        
                </Stack>
            </Box>
        </>
    )
}