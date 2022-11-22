import React from 'react';
import { useParams } from 'react-router';
import Navigation from '../../../Shared/Navigation/Navigation';

const SingleProductDetails = () => {
    const { productId, title } = useParams();
    return (
        <div>
            <Navigation></Navigation>
            <h2>Products Details {productId} </h2>
            <h3>Products Details </h3>
        </div>
    );
};

export default SingleProductDetails;