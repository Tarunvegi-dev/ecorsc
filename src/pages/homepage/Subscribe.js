import React from 'react';
import { Form, Button } from 'react-bootstrap';

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
                    <Form.Select>
                        <option>-- Select Divison --</option>
                        <option>Waltair</option>
                        <option>Khurda</option>
                        <option>Sambalpur</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select>
                        <option>-- Select Branch --</option>
                        <option>Waltair</option>
                        <option>Khurda</option>
                        <option>Sambalpur</option>
                    </Form.Select>
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