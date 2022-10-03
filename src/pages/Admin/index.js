import React from 'react';
import Adminlogin from './login';
import { Form, Button, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { FaUpload } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { RiSendPlaneFill } from 'react-icons/ri'

const Admin = (props) => {
    const logout = () => {
        localStorage.removeItem('admin-username')
        props.history.push('/admin')
    }

    return (
        <div className='admin'>
            {localStorage.getItem('admin-username') === process.env.REACT_APP_ADMIN_USERNAME
                ?
                <>
                    <Button variant='danger' onClick={logout} style={{ float: 'right', margin: '20px', padding: '10px 15px' }}><FiLogOut size="18" />&nbsp;LOGOUT</Button>
                    <div className='container' >
                        <div>
                            <center>
                                <Image src={logo} height="120px" width="120px" style={{ marginTop: '30px' }} />
                                <h2 className='heading'>ECoRSC Admin Dashboard</h2>
                            </center>
                        </div>
                        <div className='admin row' style={{ marginTop: '60px' }}>
                            <Col className='circulars' xs={12} sm={6}>
                                <h4 className='circulars-title'>Upload Circulars</h4>
                                <span>Fill the below form and you can upload circulars directly from here</span>
                                <Form style={{ marginTop: '40px', fontFamily: 'Poppins' }}>
                                    <div class="group">
                                        <input type="text" required />
                                        <span class="highlight"></span>
                                        <span class="bar"></span>
                                        <label>Title</label>
                                    </div>
                                    <div class="select">
                                        <select class="select-text" required>
                                            <option value="" disabled selected></option>
                                            <option value="1">Railway Circulars</option>
                                            <option value="2">Zonal PNM Minutes</option>
                                        </select>
                                        <span class="select-highlight"></span>
                                        <span class="select-bar"></span>
                                        <label class="select-label">Category</label>
                                    </div><br /><br />
                                    <div class="group">
                                        <input type="text" required />
                                        <span class="highlight"></span>
                                        <span class="bar"></span>
                                        <label>Pdf Link</label>
                                    </div>
                                    <div class="group">
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>
                                    <Button className='submitBtn' style={{ marginBottom: '70px' }}><FaUpload />&nbsp;UPLOAD</Button>
                                </Form>
                            </Col>
                            <Col className='bulkSMS' xs={12} sm={6}>
                                <h4 className='bulkSMSTitle'>Send Bulk SMS</h4>
                                <span>Fill the below form and you can send bulk SMS directly from here</span>
                                <Form style={{ marginTop: '40px', fontFamily: 'Poppins' }}>
                                    <div class="group">
                                        <textarea type="textarea" rows="5" required="required"></textarea><span class="highlight"></span><span class="bar"></span>
                                        <label>Message</label>
                                    </div>
                                    <div class="select">
                                        <select class="select-text" required>
                                            <option value="" disabled selected></option>
                                            <option value="1">Waltair</option>
                                            <option value="2">Khurda</option>
                                            <option value="3">Sambalpur</option>
                                        </select>
                                        <span class="select-highlight"></span>
                                        <span class="select-bar"></span>
                                        <label class="select-label">Divison</label>
                                    </div><br /><br />
                                    <div class="select">
                                        <select class="select-text" required>
                                            <option value="" disabled selected></option>
                                            <option value="1">Waltair</option>
                                            <option value="2">Khurda</option>
                                            <option value="3">Sambalpur</option>
                                        </select>
                                        <span class="select-highlight"></span>
                                        <span class="select-bar"></span>
                                        <label class="select-label">Branch</label>
                                    </div><br /><br />
                                    <Button className='submitBtn' style={{ marginBottom: '70px' }}><RiSendPlaneFill />&nbsp;SEND</Button>
                                </Form>
                            </Col>
                        </div>
                    </div>
                </>
                : <Adminlogin />
            }
        </div>
    );
};

export default Admin;