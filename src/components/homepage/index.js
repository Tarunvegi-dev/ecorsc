import React from 'react'
import Navbar from '../Navbar';
import FlashNews from './FlashNews';
import Description from './Description'
import Circulars from './Circulars';
import Banner from './Banner'
import './styles.css'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: '#0000006d', padding: '20px 0' }}>
                <FlashNews />
                <Banner />
            </div>
            <Description />
            <Circulars />
        </>
    );
}

export default Homepage;