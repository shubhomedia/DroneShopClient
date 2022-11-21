import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Products from '../../Products/Products/Products';
import Banner from '../Banner/Banner';
import ProductsShow from '../ProductsShow/ProductsShow';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ProductsShow></ProductsShow>
        </div>
    );
};

export default Home;