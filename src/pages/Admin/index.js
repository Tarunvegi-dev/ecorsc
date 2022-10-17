import React, { useState, useEffect } from 'react';
import Adminlogin from './login';
import { Form, Button, Image, Tabs, Tab, Table, Spinner } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { FaUpload } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { firestore, storage } from '../../firebase/firebase-utils'

const Admin = (props) => {
    const [circulars, setcirculars] = useState([]);
    const [bearers, setbearers] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const [circular, setcircular] = useState({
        title: "",
        category: "circular",
        link: "",
    });
    const [bearer, setbearer] = useState({
        name: "",
        designation: "",
        location: "",
        mobile: ""
    });

    const logout = () => {
        localStorage.removeItem('admin-username')
        props.history.push('/admin')
    }

    const uploadItems = async () => {
        if (circular.title === '' || circular.category === '' || circular.link === '') {
            alert('Please fill all the fields')
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
        setisLoading(true)
        storage.ref(`/circulars/${file.name}`).put(file)
            .then(async () => {
                await storage.ref("circulars").child(file.name).getDownloadURL()
                    .then((url) => {
                        setcircular({ ...circular, link: url })
                        setisLoading(false)
                    })
                    .catch((err) => console.log(err))
            })
    }

    useEffect(() => {
        firestore.collection('railway-board').get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setcirculars(data)
            })
        firestore.collection('office-bearers').get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setbearers(data)
            })
    }, []);

    const deleteDocument = (collection, id) => {
        firestore.collection(collection).doc(id).delete()
            .then(() => {
                alert("Record Deleted Successfully");
                window.location.reload(true)
            })
            .catch((err) => console.log(err))
    }

    const addOfficeBearers = () => {
        if (bearer.name === '' || bearer.designation === '' || bearer.location === '' || bearer.mobile === '') {
            alert('Please fill all the fields')
            return;
        } else {
            firestore.collection('office-bearers').doc().set(bearer)
                .then(() => {
                    alert('Document uploaded successfully!')
                    window.location.reload(true)
                })
                .catch((err) => console.log(err))
        }
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
                        <Tabs defaultActiveKey="circulars" style={{ marginTop: '60px' }}>
                            <Tab eventKey="circulars" title="Circulars">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {circulars.map((c, i) =>
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{c.title}</td>
                                                <td>{c.category}</td>
                                                <td><Button onClick={() => deleteDocument('railway-board', c.id)} variant='danger'>Delete</Button></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                                <div className='circulars'>
                                    <h3 className='circulars-title'>Upload Circulars</h3>
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
                                        <div style={{ marginBottom: '50px' }}>
                                            {isLoading ? <div style={{ color: 'tomato' }}>Uploading File...Please Wait...<br /><br /><Spinner animation='border' /></div> :
                                                <Button className='submitBtn' onClick={uploadItems}><FaUpload />&nbsp;UPLOAD</Button>}
                                        </div>
                                    </Form>
                                </div>
                            </Tab>
                            <Tab eventKey="officebearers" title="Office Bearers">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Designation</th>
                                            <th>Location</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bearers.map((b, i) =>
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{b.name}</td>
                                                <td>{b.designation}</td>
                                                <td>{b.location}</td>
                                                <td><Button onClick={() => deleteDocument('office-bearers', b.id)} variant='danger'>Delete</Button></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                                <div className='officeBearers'>
                                    <h3 className='heading'>Add Office Bearers</h3>
                                    <span>Fill the below form and you can add Office Bearers directly from here</span>
                                    <Form style={{ marginTop: '40px', fontFamily: 'Poppins' }}>
                                        <div className="group">
                                            <input type="text" required onChange={(e) => setbearer({ ...bearer, name: e.target.value })} />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Name</label>
                                        </div>
                                        <div className="group">
                                            <input type="text" required onChange={(e) => setbearer({ ...bearer, designation: e.target.value })} />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Designation</label>
                                        </div>
                                        <div className="group">
                                            <input type="text" required onChange={(e) => setbearer({ ...bearer, location: e.target.value })} />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Location</label>
                                        </div>
                                        <div className="group">
                                            <input type="text" required onChange={(e) => setbearer({ ...bearer, mobile: e.target.value })} />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Mobile</label>
                                        </div><br /><br />
                                        <Button className='submitBtn' onClick={addOfficeBearers} style={{ marginBottom: '70px' }}><FaUpload />&nbsp;UPLOAD</Button>
                                    </Form>
                                </div>
                            </Tab>
                            <Tab eventKey="bulksms" title="Bulk SMS">
                                <div className='bulkSMS'>
                                    <h3 className='bulkSMSTitle'>Send Bulk SMS</h3>
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
                                        <Button className='submitBtn' style={{ marginBottom: '50px' }}><RiSendPlaneFill />&nbsp;SEND</Button>
                                    </Form>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </>
                : <Adminlogin />
            }
        </div >
    );
};

export default Admin;