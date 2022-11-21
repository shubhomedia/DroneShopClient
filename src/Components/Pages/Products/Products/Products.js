import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shubhomedia/DroneShopClient/main/src/Assets/drone_products.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <Grid container >
                {
                    product.slice(0, 6).map(product =>
                        <Grid item sm={4}>
                            <SingleProduct
                                key={product.id}
                                product={product}>
                            </SingleProduct>
                        </Grid>

                    )
                }
            </Grid >
        </div>


    );
};

export default Products;