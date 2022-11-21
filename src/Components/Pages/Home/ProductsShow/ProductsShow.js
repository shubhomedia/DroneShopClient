import { Grid } from '@mui/material';
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
            <Grid container >
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
        </div>
    )
};

export default ProductsShow;