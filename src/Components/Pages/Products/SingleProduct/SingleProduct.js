import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SingleProduct.css';


const SingleProduct = (props) => {
    const { id, title, model, camera, video, flight_time, wind_resistance, video_transmission, weight, gimbal, price, image_url } = props.product;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image_url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Model: {model}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }} to={`/products/${id}`}>
                        Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default SingleProduct;