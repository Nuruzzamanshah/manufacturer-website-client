import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Outdoors from './Outdoors';
import Products from './Products';
import Question from './Question';
import Services from './Services';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <Products></Products>
            <Tools></Tools>
            <Outdoors></Outdoors>
            <Summary></Summary>
            <Question></Question>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;