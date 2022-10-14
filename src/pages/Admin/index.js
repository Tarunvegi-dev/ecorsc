import React, { useState } from 'react';
import Adminlogin from './login';
import { Form, Button, Image } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { FaUpload } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { firestore, storage } from '../../firebase/firebase-utils'

const Admin = (props) => {
    const [circular, setcircular] = useState({
        title: "",
        category: "circular",
        link: "",
    });
    const [file, setfile] = useState(null);

    const logout = () => {
        localStorage.removeItem('admin-username')
        props.history.push('/admin')
    }

    const uploadItems = async () => {
        if (circular.title === '' || circular.category === '') {
            alert('Please fill all the fields')
            return;
        }
        if (circular.link === '' && file === null) {
            alert('Please enter pdf url or upload file')
            return;
        }
        await firestore.collection('railway-board').doc().set(circular)
            .then(() => {
                alert('Document Uploaded Successfully');
                window.location.reload(true)
            })
            .catch((err) => console.log(err))
    }

    const updateFile = (file) => {
        setfile(file)
        storage.ref(`/circulars/${file.name}`).put(file)
            .then(async () => {
                await storage.ref("circulars").child(file.name).getDownloadURL()
                    .then((url) => {
                        setcircular({ ...circular, link: url })
                    })
            })
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
                        <div className='adminContainer' style={{ marginTop: '60px' }}>
                            <div className='circulars'>
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
                                            <option value="pnm-minutes">Zonal PNM Minutes</option>
                                        </select>
                                        <span className="select-highlight"></span>
                                        <span className="select-bar"></span>
                                        <label className="select-label">Category</label>
                                    </div><br /><br />
                                    <div className="group">
                                        <input type="text" required value={circular.link} onChange={(e) => setcircular({ ...circular, link: e.target.value })} />
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Pdf Link</label>
                                    </div>
                                    <div className="group">
                                        <input className="form-control" type="file" id="formFile" onChange={(e) => updateFile(e.target.files[0])} />
                                    </div>
                                    <Button className='submitBtn' style={{ marginBottom: '70px' }} onClick={uploadItems}><FaUpload />&nbsp;UPLOAD</Button>
                                </Form>
                            </div>
                            <div className='bulkSMS'>
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
                            </div>
                        </div>
                    </div>
                </>
                : <Adminlogin />
            }
        </div>
    );
};

export default Admin;