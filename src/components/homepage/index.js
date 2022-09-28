import React from 'react'
import Navbar from '../Navbar';
// import FlashNews from './FlashNews';
import Description from './Description'
import Circulars from './Circulars';
import Banner from './Banner'
import './styles.css'

const Homepage = () => {
    return (
        <div className="Home">
            <Navbar />
            <Banner />
            {/* <Description /> */}
            {/* <Circulars /> */}
        </div>
    );
}

export default Homepage;