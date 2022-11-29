import { Typography } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Typography
                sx={{ textAlign: 'center', py: 2, background: 'gray', color: 'white', }}
                variant="h5" component="h5">
                All Rights Reserved @ DroneShop
            </Typography>;

        </div >
    );
};

export default Footer;