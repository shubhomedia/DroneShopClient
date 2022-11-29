import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SingleProduct.css';


const SingleProduct = (props) => {
    const { id, title, model, camera, video, flight_time, wind_resistance, video_transmission, weight, gimbal, price, image_url } = props.product;

    const navigate = useNavigate();

    const showProductDetail = () => {
        const path = `/products/${id}`;
        navigate(path);
    }
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
                <Button
                    onClick={showProductDetail}
                    size="small" color="primary">
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default SingleProduct;