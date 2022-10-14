import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Circulars from './Circulars';
import ContactInfo from './ContactInfo';
import Carousel from './Carousel'
import Links from './Links.js';
import Subscribe from './Subscribe';
import Footer from '../../components/Footer'
import { Row, Col, Container } from 'react-bootstrap'
import { firestore } from '../../firebase/firebase-utils'

const Homepage = () => {
    const [circulars, setcirculars] = useState([]);
    const [pnmMinutes, setpnmMinutes] = useState([]);

    useEffect(() => {
        firestore.collection('railway-board').where("category", "==", "circular").get()
            .then((querySnapshot) => {
                let data = querySnapshot.docs.map((doc) => {
                    return { ...doc.data() }
                })
                setcirculars(data)
            })
        firestore.collection('railway-board').where("category", "==", "pnm-minutes").get()
            .then((querySnapshot) => {
                let data = querySnapshot.docs.map((doc) => {
                    return { ...doc.data() }
                })
                setpnmMinutes(data)
            })
    }, []);

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
                            <Circulars circulars={circulars} pnmMinutes={pnmMinutes}/>
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