import React from 'react'
import Navbar from '../../components/Navbar';
import Description from './Description'
import Circulars from './Circulars';
import Banner from './Banner';
import Links from './Links.js';
import Subscribe from './Subscribe';
import Footer from '../../components/Footer'

const Homepage = () => {
    return (
        <>
            <div className='Home'>
                <Navbar />
                <Banner />
                <Description />
                <Circulars />
                <Links />
                <Subscribe />
                <Footer />
            </div>
        </>
    );
}

export default Homepage;