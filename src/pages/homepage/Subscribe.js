import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { FaRegAddressCard, FaPhoneAlt } from 'react-icons/fa'

const Subscribe = () => {
    return (
        <div className="Subscribe">
            <Container>
                <Row className="gx-5">
                    <Col sm={12} md={6} className="p-10">
                        <div className="p-3">
                            <h3 className="title">Subscribe</h3>
                            <p className="mute">Fill the form and get notifications of ECoRSC updates via mobile SMS</p>
                            <br />
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter your mobile number" />
                                    <Form.Text className="text-muted">
                                        We'll never share your mobile number with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Button variant="primary" size='lg' type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="p-3" style={{ height: '100%' }}>
                            <div className="Contact">
                                <h3 className="title">Contact</h3>
                                <hr />
                                {/* Address */}
                                <p className="logo">
                                    <FaRegAddressCard size={24} /> &nbsp; Address
                                </p>
                                <span>
                                    Southern Railway Employees’ Sangh, Central Office, “Unity House”, New No: 9, Old No. 2, Siruvallur High Road, Perambur, Chennai- 600 011.
                                </span>
                                {/* Phone Number */}
                                <p className="logo">
                                    <FaPhoneAlt size={22} /> &nbsp; Phone Number
                                </p>
                                <span>
                                    personal:&nbsp; +91 XXXXXXXXXX
                                </span>
                                <br />
                                <span>
                                    Office: &nbsp;+91 XXXXXXXXXX
                                </span>
                                {/* mail */}
                                <p className="logo">
                                    <FaRegAddressCard size={24} /> &nbsp; Mail
                                </p>
                                <span>
                                    admin@domain.com
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Subscribe