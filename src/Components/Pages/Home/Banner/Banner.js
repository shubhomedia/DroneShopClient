import { Container, Typography } from '@mui/material';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Typography sx={{
                    color: 'white',

                }} align={'center'} pt={10} variant="h2" component="h2">Choose Your Best Done From DroneShop</Typography>
            </Container>
        </div >
    );
};

export default Banner;