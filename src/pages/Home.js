import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Products from './Products';
// import Purchases from './Purchases';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <Products></Products>
            {/* <Purchases></Purchases> */}
            <Footer></Footer>
            
        </div>
    );
};

export default Home;