import React, { useState } from 'react';
import Adminlogin from './login';
import { Form, Button, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { FaUpload } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { firestore } from '../../firebase/firebase-utils'

const Admin = (props) => {
    const [circular, setcircular] = useState({
        title: "",
        category: "circular",
        link: "",
    });

    const logout = () => {
        localStorage.removeItem('admin-username')
        props.history.push('/admin')
    }

    const uploadItems = () => {
        if (circular.title === '' || circular.category === '' || circular.link === '') {
            alert('Please fill all the fields')
            return;
        }
        firestore.collection('railway-board').doc().set(circular)
            .then(() => {
                alert('Document Uploaded Successfully');
                window.location.reload(true)
            })
            .catch((err) => console.log(err))
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
                                    <div className="group">
                                        <input type="text" required onChange={(e) => setcircular({ ...circular, title: e.target.value })} />
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Title</label>
                                    </div>
                                    <div className="select">
                                        <select defaultValue="circular" className="select-text" required onChange={(e) => setcircular({ ...circular, category: e.target.value })}>
                                            <option value="" disabled selected></option>
                                            <option value="cirular">Railway Circulars</option>
                                            <option value="pnm minutes">Zonal PNM Minutes</option>
                                        </select>
                                        <span className="select-highlight"></span>
                                        <span className="select-bar"></span>
                                        <label className="select-label">Category</label>
                                    </div><br /><br />
                                    <div className="group">
                                        <input type="text" required onChange={(e) => setcircular({ ...circular, link: e.target.value })} />
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Pdf Link</label>
                                    </div>
                                    <div className="group">
                                        <input className="form-control" type="file" id="formFile" />
                                    </div>
                                    <Button className='submitBtn' style={{ marginBottom: '70px' }} onClick={uploadItems}><FaUpload />&nbsp;UPLOAD</Button>
                                </Form>
                            </Col>
                            <Col className='bulkSMS' xs={12} sm={6}>
                                <h4 className='bulkSMSTitle'>Send Bulk SMS</h4>
                                <span>Fill the below form and you can send bulk SMS directly from here</span>
                                <Form style={{ marginTop: '40px', fontFamily: 'Poppins' }}>
                                    <div className="group">
                                        <textarea type="textarea" rows="5" required="required"></textarea><span className="highlight"></span><span className="bar"></span>
                                        <label>Message</label>
                                    </div>
                                    <div className="select">
                                        <select className="select-text" required defaultValue="1">
                                            <option value="" disabled selected></option>
                                            <option value="1">Waltair</option>
                                            <option value="2">Khurda</option>
                                            <option value="3">Sambalpur</option>
                                        </select>
                                        <span className="select-highlight"></span>
                                        <span className="select-bar"></span>
                                        <label className="select-label">Divison</label>
                                    </div><br /><br />
                                    <div className="select">
                                        <select className="select-text" required defaultValue="1">
                                            <option value="" disabled selected defaultValue=""></option>
                                            <option value="1">Waltair</option>
                                            <option value="2">Khurda</option>
                                            <option value="3">Sambalpur</option>
                                        </select>
                                        <span className="select-highlight"></span>
                                        <span className="select-bar"></span>
                                        <label className="select-label">Branch</label>
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