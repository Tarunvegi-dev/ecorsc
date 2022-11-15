import React, { useState, useEffect } from 'react';
import { Form, Button, Image, Tabs, Tab, Table, Spinner } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { FaUpload } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { firestore, storage, auth, signOut } from '../../firebase/firebase-utils'
import UnAuthorized from './Unauthorized';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'

const Admin = () => {
    const [user, setuser] = useState(null);
    const [circulars, setcirculars] = useState([]);
    const [bearers, setbearers] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isUploading, setisUploading] = useState(false);

    const [src, setFile] = useState(null)
    const [image, setImage] = useState(null)
    const [crop, setCrop] = useState({ aspect: 4 / 3 });
    const [croppedImg, setCroppedImg] = useState(null);
    const [src2, setFile2] = useState(null)
    const [image2, setImage2] = useState(null)
    const [crop2, setCrop2] = useState({ aspect: 1 / 1 });
    const [croppedImg2, setCroppedImg2] = useState(null);
    const [videoUrl, setvideoUrl] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setuser(user)
        })
    }, []);

    const [circular, setcircular] = useState({
        title: "",
        category: "circular",
        department: "Accounts",
        link: "",
    });
    const [bearer, setbearer] = useState({
        name: "",
        designation: "",
        location: "",
        mobile: ""
    });

    const uploadItems = async () => {
        if (circular.title === '' || circular.category === '' || circular.link === '') {
            alert('Please fill all the fields')
            return;
        }
        setisLoading(true)
        await firestore.collection('railway-board').doc().set(circular)
            .then(() => {
                alert('Document Uploaded Successfully');
                setisLoading(false)
                window.location.reload(true)
            })
            .catch((err) => console.log(err))
    }

    const updateFile = (file) => {
        setisUploading(true)
        storage.ref(`/circulars/${file.name}`).put(file)
            .then(async () => {
                await storage.ref("circulars").child(file.name).getDownloadURL()
                    .then((url) => {
                        setcircular({ ...circular, link: url })
                        setisUploading(false)
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
        Swal.fire({
            title: 'Are you sure want to delete this item?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((res) => {
            if (res.isConfirmed) {
                firestore.collection(collection).doc(id).delete()
                    .then(() => {
                        alert("Record Deleted Successfully");
                        window.location.reload(true)
                    })
                    .catch((err) => console.log(err))
            }
        })
    }

    const addOfficeBearers = () => {
        if (bearer.name === '' || bearer.designation === '' || bearer.location === '' || bearer.mobile === '' || croppedImg2 === '') {
            alert('Please fill all the fields')
            return;
        } else {
            setisLoading(true)
            firestore.collection('office-bearers').doc().set({
                name: bearer.name,
                designation: bearer.designation,
                location: bearer.location,
                mobile: bearer.mobile,
                image: croppedImg2,
                time: Date.now(),
            })
                .then(() => {
                    setisLoading(false)
                    alert('Document uploaded successfully!')
                    window.location.reload(true)
                })
                .catch((err) => console.log(err))
        }
    }

    const handleFileChange = (e, setFile) => {
        if (e.target.files.length !== 0) {
            setFile(URL.createObjectURL(e.target.files[0]))
        } else {
            window.alert("Select Image File")
        }
        setCroppedImg(null)
    }

    function getCroppedImg(image, setCroppedImg, crop) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );


        if (canvas.width !== 0 || canvas.height !== 0) {
            const base64Image = canvas.toDataURL('image/jpeg');
            setCroppedImg(base64Image);
        } else { window.alert('Please crop the image correctly ... 😇 ') }
    }


    const upload = (url, category) => {
        if (!url) {
            alert('Please Fill All Empty Fields')
        } else {
            setisLoading(true)
            firestore.collection('photo-gallery').doc().set({
                'url': url,
                'time': Date.now(),
                category: category
            }).then(() => {
                setisLoading(false)
                alert('Submitted Successfully')
                window.location.reload(true);
            })
        }
    }


    return (
        <div className='admin'>
            <Helmet>
                <title>ECoRSC - Admin</title>
            </Helmet>
            {user ? user.email === 'naveen.amie@gmail.com' ?
                <>
                    <Button variant='danger' onClick={signOut} style={{ float: 'right', margin: '20px', padding: '10px 15px' }}><FiLogOut size="18" />&nbsp;LOGOUT</Button>
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
                                            <th>Department</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {circulars.map((c, i) =>
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{c.title}</td>
                                                <td>{c.category}</td>
                                                <td>{c.department}</td>
                                                <td><Button onClick={() => deleteDocument('railway-board', c.id)} variant='danger'>Delete</Button></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                                <div className='circulars'>
                                    <h3 className='heading'>Upload Circulars</h3>
                                    <span>Fill the below form and you can upload circulars directly from here</span>
                                    <Form style={{ marginTop: '40px', fontFamily: 'Poppins' }}>
                                        <div className="group">
                                            <input type="text" required onChange={(e) => setcircular({ ...circular, title: e.target.value })} />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Title</label>
                                        </div>
                                        <div className="select">
                                            <select defaultValue="circular" className="select-text" required value={circular.category} onChange={(e) => setcircular({ ...circular, category: e.target.value })}>
                                                <option value="" disabled selected></option>
                                                <option value="cirular">Railway Circulars</option>
                                                <option value="pnm-minutes">Zonal PNM Minutes</option>
                                            </select>
                                            <span className="select-highlight"></span>
                                            <span className="select-bar"></span>
                                            <label className="select-label">Category</label>
                                        </div><br /><br />
                                        <div className="select">
                                            <select defaultValue="circular" className="select-text" required value={circular.department} onChange={(e) => setcircular({ ...circular, department: e.target.value })}>
                                                <option value="" disabled selected></option>
                                                <option>Achievements</option>
                                                <option>Accounts</option>
                                                <option>Personnel</option>
                                                <option>Engineering</option>
                                                <option>Mechanical</option>
                                                <option>Electrical</option>
                                                <option>Medical</option>
                                                <option>Stores</option>
                                                <option>Running Staff</option>
                                                <option>Commercial</option>
                                                <option>Signal and Telecom</option>
                                                <option>Operating</option>
                                            </select>
                                            <span className="select-highlight"></span>
                                            <span className="select-bar"></span>
                                            <label className="select-label">Department</label>
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
                                            {isUploading ? <div style={{ color: 'tomato' }}>Uploading File...Please Wait...<br /><br /><Spinner animation='border' /></div> :
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
                                        <Form.Group>
                                            <input type="file" onChange={(e) => handleFileChange(e, setFile2)} className='form-control' />
                                        </Form.Group><br /><br />
                                        {
                                            croppedImg2 ?
                                                <>
                                                    <center>
                                                        <Image src={croppedImg2} fluid alt="Result" style={{ width: '100%' }} />
                                                        <br />
                                                        <Button variant='primary' style={{ width: '200px', marginTop: '20px' }} onClick={() => setCroppedImg2(null)}>Recrop</Button>
                                                    </center>
                                                </>
                                                : src2
                                                    ?
                                                    <center>
                                                        <ReactCrop src={src2} onImageLoaded={setImage2} crop={crop2} onChange={newCrop => setCrop2(newCrop)} />
                                                        <br />
                                                        <Button variant='danger' style={{ width: '200px', marginTop: '20px' }} onClick={() => getCroppedImg(image2, setCroppedImg2, crop2)}>Crop</Button>
                                                    </center> : null
                                        }
                                        <br /><br />
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
                                        <Button className='submitBtn' onClick={addOfficeBearers} style={{ marginBottom: '70px', minWidth: '100px' }} disabled={isLoading}>{isLoading ? <Spinner animation="border" size='18' /> : <span><FaUpload />&nbsp;UPLOAD</span>}</Button>
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
                                        <Button className='submitBtn' style={{ marginBottom: '50px', minWidth: '100px' }} disabled={isLoading}>{isLoading ? <Spinner animation="border" size='18' /> : <span><RiSendPlaneFill />&nbsp;SEND</span>}</Button>
                                    </Form>
                                </div>
                            </Tab>
                            <Tab eventKey="photo-gallery" title="Photo Gallery">
                                <div className='photo-gallery'>
                                    <Form>
                                        <h3 className='heading'>Upload Images</h3>
                                        <span>Fill the below form and you can upload images directly from here</span><br /><br />
                                        <Form.Group>
                                            <input type="file" onChange={(e) => handleFileChange(e, setFile)} className='form-control' />
                                        </Form.Group><br /><br />
                                        {
                                            croppedImg ?
                                                <>
                                                    <center>
                                                        <Image src={croppedImg} fluid alt="Result" style={{ width: '100%' }} />
                                                        <br />
                                                        <Button variant='primary' style={{ width: '200px', marginTop: '20px' }} onClick={() => setCroppedImg(null)}>Recrop</Button>
                                                    </center>
                                                </>
                                                : src
                                                    ?
                                                    <center>
                                                        <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={newCrop => setCrop(newCrop)} />
                                                        <br />
                                                        <Button variant='danger' style={{ width: '200px', marginTop: '20px' }} onClick={() => getCroppedImg(image, setCroppedImg, crop)}>Crop</Button>
                                                    </center> : null
                                        }
                                        <Button className='submitBtn' style={{ marginTop: '20px', minWidth: '100px' }} disabled={isLoading} onClick={() => upload(croppedImg, 'Photos')}>{isLoading ? <Spinner animation="border" size='18' /> : <span><FaUpload />&nbsp;UPLOAD</span>}</Button>
                                        <br /><br />
                                        <h3 className='heading' style={{ margin: '40px 0px' }}>Upload Videos</h3>
                                        <div className="group">
                                            <input type="text" required value={videoUrl} onChange={(e) => setvideoUrl(e.target.value)} />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Youtube Link</label>
                                        </div>
                                        <Button className='submitBtn' style={{ marginTop: '20px', minWidth: '100px' }} disabled={isLoading} onClick={() => upload(videoUrl, 'Videos')}>{isLoading ? <Spinner animation="border" size='18' /> : <span><FaUpload />&nbsp;UPLOAD</span>}</Button>
                                    </Form>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </>
                : <UnAuthorized /> : <UnAuthorized />
            }
        </div >
    );
};

export default Admin;