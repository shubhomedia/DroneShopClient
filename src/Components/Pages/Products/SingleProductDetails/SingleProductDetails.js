import React, { useContext } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../../Shared/Navigation/Navigation';
import { ProductContext } from '../Products/Products';

function SingleProductDetails() {
    const product = useContext(ProductContext);

    const { productId } = useParams();
    return (
        <div>
            <Navigation></Navigation>
            <h2>Products Details {productId} </h2>
            <h3>Products Details {product}</h3>
        </div>
    );
}

export default SingleProductDetails;