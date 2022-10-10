import React from 'react'
import Navbar from '../../components/Navbar';
import Description from './Description'
import Circulars from './Circulars';
import Carousel from './Carousel'
import Links from './Links.js';
import Subscribe from './Subscribe';
import Footer from '../../components/Footer'
import { Row, Col, Container } from 'react-bootstrap'

const Homepage = () => {
    return (
        <>
            <div className='Home'>
                <Container>
                    <Navbar />
                    <br />
                    <Row>
                        <Col sm={8}>
                            <Carousel />
                            <Circulars />
                        </Col>
                        <Col sm={4}>
                            <Links />
                            <Subscribe />
                        </Col>
                    </Row>
                    <Footer />
                </Container>
            </div>
        </>
    );
}

export default Homepage;