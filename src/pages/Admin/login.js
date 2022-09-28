import React from 'react';
import logo from '../../assets/logo.png'
import { Form, Image, Col, Button } from 'react-bootstrap'
import './styles.css'

const Adminlogin = () => {
    return (
        <div className='container login'>
            <center>
                <Image src={logo} height="120px" style={{ marginBottom: '20px' }} />
                <h3>ECoRSC Admin Login</h3>
                <div style={{ marginTop: '40px' }}>
                    <Form.Group as={Col} sm={4} >
                        <Form.Control className="username-input" type='text' placeholder='Enter username' />
                    </Form.Group><br />
                    <Form.Group as={Col} sm={4} >
                        <Form.Control className="username-input" type='password' placeholder='Enter password' />
                    </Form.Group>
                </div>
                <Button variant="success" style={{ marginTop: '30px', padding: '5px 25px', fontSize: '17px' }}>Login</Button>
            </center>
        </div>
    );
};

export default Adminlogin;