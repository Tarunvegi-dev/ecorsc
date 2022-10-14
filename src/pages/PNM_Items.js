import React from 'react';
import { Container, InputGroup, Form, Button, Row, Col, Pagination } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { Events } from './homepage/Circulars'

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
                <h3 className="title">Railway PNM Items</h3>
                <br />
                <Events />
                <br />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Pagination>
                            {items}
                        </Pagination>
                </div>
            </Container>
        </div>
    )
}

export default Circulars