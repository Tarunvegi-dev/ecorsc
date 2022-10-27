import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Circulars from './Circulars';
import ContactInfo from './ContactInfo';
import Carousel from './Carousel'
import Links from './Links.js';
import Subscribe from './Subscribe';
import Footer from '../../components/Footer'
import { Row, Col, Container, Card } from 'react-bootstrap'
import { firestore } from '../../firebase/firebase-utils'
import { FiChevronsRight } from 'react-icons/fi'

const Homepage = (props) => {
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

    let dept = ["All", "Achievements", "Accounts", "Personnel", "Engineering", "Mechanical", "Electrical", "Medical", "Stores", "Running Staff", "Commercial", "Signal and Telecom", "Operating"]

    return (
        <>
            <div className='Home'>
                <Container>
                    <Navbar />
                    <br />
                    <Row>
                        <Col sm={3}>
                            <Links title="Important Links" />
                            <ContactInfo />
                        </Col>
                        <Col sm={6}>
                            <Carousel />
                            <Circulars circulars={circulars} pnmMinutes={pnmMinutes} />
                        </Col>
                        <Col sm={3}>
                            <p className="title">ECoRSC Circulars<br />Department Wise</p>
                            <Card style={{ padding: '10px' }}>
                                {dept.map((dept, i) => <div key={i} onClick={() => props.history.push('/board-circulars', { department: dept })} style={{ display: 'flex', fontFamily: 'poppins', fontSize: '14px', margin: '5px 20px', color: '#000080', cursor: 'pointer' }}>
                                    <FiChevronsRight style={{ marginTop: '4px' }} />&nbsp; <span>{dept}</span>
                                </div>)}
                            </Card>
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