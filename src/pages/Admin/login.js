import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import { Form, Image, Col, Button } from 'react-bootstrap'
import './styles.css'
import { withRouter } from 'react-router-dom';

const Adminlogin = (props) => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');

    const loginUser = () => {
        if (username === '') {
            seterror('Please enter username')
        } else if (password === '') {
            seterror('Please enter password')
        } else if (username !== process.env.REACT_APP_ADMIN_USERNAME || password !== process.env.REACT_APP_ADMIN_PASSWORD) {
            seterror('Incorrect username/password')
        } else {
            localStorage.setItem('admin-username', username)
            props.history.push('/admin')
        }
    }

    return (
        <div className='container login'>
            <center>
                <Image src={logo} height="120px" style={{ marginBottom: '20px' }} />
                <h3>ECoRSC Admin Login</h3>
                <div style={{ marginTop: '40px' }}>
                    <Form.Group as={Col} sm={4} >
                        <Form.Control className="username-input" type='text' placeholder='Enter username' value={username} onChange={(e) => setusername(e.target.value)} />
                    </Form.Group><br />
                    <Form.Group as={Col} sm={4} >
                        <Form.Control className="username-input" type='password' placeholder='Enter password' value={password} onChange={(e) => setpassword(e.target.value)} />
                    </Form.Group>
                    <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>
                </div>
                <Button variant="success" style={{ marginTop: '10px', padding: '5px 25px', fontSize: '17px' }} onClick={loginUser}>Login</Button>
            </center>
        </div>
    );
};

export default withRouter(Adminlogin);