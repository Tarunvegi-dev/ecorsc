import React from 'react'
import Navbar from '../../components/Navbar';
import Circulars from './Circulars';
import ContactInfo  from './ContactInfo';
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
                        <Col sm={3}>
                            <Links />
                            <ContactInfo />
                        </Col>
                        <Col sm={6}>
                            <Carousel />
                            <Circulars />
                        </Col>
                        <Col sm={3}>
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