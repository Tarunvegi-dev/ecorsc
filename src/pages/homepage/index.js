import React from 'react'
import Navbar from '../../components/Navbar';
import Description from './Description'
import Circulars from './Circulars';
import Banner from './Banner'
import './styles.css'

const Homepage = () => {
    return (
        <>
            <div className='wrapper'>
                <Navbar />
                <div style={{ backgroundColor: '#0000006d', padding: '20px 0' }}>
                    <Banner />
                </div>
                <Description />
            </div>
            <Circulars />
        </>
    );
}

export default Homepage;