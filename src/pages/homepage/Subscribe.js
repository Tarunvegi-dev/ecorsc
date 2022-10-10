import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { FaRegAddressCard, FaPhoneAlt } from 'react-icons/fa'

const Subscribe = () => {
    return (
        <div className="Subscribe">
            <h3 className="title">Subscribe</h3>
            <p className="mute">Fill the form and get notifications of ECoRSC updates via mobile SMS</p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Your Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="tel" placeholder="Enter your mobile number" />
                    <Form.Text className="text-muted">
                        We'll never share your mobile number with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Subscribe