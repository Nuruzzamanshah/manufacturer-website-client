import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Outdoors from './Outdoors';
import Products from './Products';
import Services from './Services';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <Products></Products>
            <Tools></Tools>
            <Outdoors></Outdoors>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;