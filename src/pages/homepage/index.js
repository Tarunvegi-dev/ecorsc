import React from 'react'
import Navbar from '../../components/Navbar';
import Description from './Description'
import Circulars from './Circulars';
import Banner from './Banner'

const Homepage = () => {
    return (
        <>
            <div className='Home'>
                <Navbar />
                <Banner />
                <Description />
                <Circulars />
            </div>
        </>
    );
}

export default Homepage;