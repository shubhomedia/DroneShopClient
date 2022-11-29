import { Box, Container, Grid } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';


export const ProductContext = createContext();

const Products = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shubhomedia/DroneShopClient/main/src/Assets/drone_products.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const newProducts = 'jamal';

    return (
        <div>
            <Navigation></Navigation>
            <ProductContext.Provider>
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
            </ProductContext.Provider>
        </div>
    );

};

export default Products;