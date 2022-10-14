import React, { useState, useEffect } from 'react';
import { Container, InputGroup, Form, Button, Row, Col, Pagination } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { Events } from './homepage/Circulars'
import { firestore } from '../firebase/firebase-utils';

const Circulars = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const [circulars, setcirculars] = useState([]);

    useEffect(() => {
        firestore.collection('railway-board').where("category", "==", "circular").get()
            .then((querySnapshot) => {
                let data = querySnapshot.docs.map((doc) => {
                    return { ...doc.data() }
                })
                setcirculars(data)
            })
    }, []);

    return (
        <div className="Cirsulars">
            <Container>
                <Navbar />
                <br />
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <Button style={{ backgroundColor: '#000080' }} id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ padding: '5px 20px', border: '1px solid gray', color: '#000080', borderRadius: '25px', margin: '0 5px' }}>
                        Engineering
                    </div>
                    <div style={{ padding: '5px 20px', border: '1px solid gray', color: '#000080', borderRadius: '25px', margin: '0 5px' }}>
                        Science
                    </div>
                    <div style={{ padding: '5px 20px', border: '1px solid gray', color: '#000080', borderRadius: '25px', margin: '0 5px' }}>
                        M Tech
                    </div>
                </div>
                <br />
                <h3 className="title">Railway Board Circulars</h3>
                <Events items={circulars} />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination>
                        {items}
                    </Pagination>
                </div>
            </Container>
        </div>
    )
}

export default Circulars