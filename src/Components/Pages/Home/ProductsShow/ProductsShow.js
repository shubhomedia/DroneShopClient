import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../Products/SingleProduct/SingleProduct';

const ProductsShow = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shubhomedia/DroneShopClient/main/src/Assets/drone_products.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div>
            <Container sx={{ py: 8 }} maxWidth='lg'>

                <Grid container spacing={4} >
                    {
                        product.slice(0, 6).map(product =>
                            <Grid key={product.id} item sm={4}>
                                <SingleProduct
                                    key={product.id}
                                    product={product}>
                                </SingleProduct>
                            </Grid>

                        )
                    }
                </Grid >

            </Container>
        </div>
    )
};

export default ProductsShow;