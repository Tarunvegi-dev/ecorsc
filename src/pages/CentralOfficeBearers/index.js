import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import { CgToolbox } from 'react-icons/cg'
import { MdLocationOn } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import Footer from '../../components/Footer'
import { firestore } from '../../firebase/firebase-utils'
import { Helmet } from 'react-helmet'

const CentralOfficeBearers = () => {
    //eslint-disable-next-line
    const [bearers, setbearers] = useState([]);

    useEffect(() => {
        firestore.collection('office-bearers').orderBy("time", "asc").get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => {
                    return {
                        ...doc.data()
                    }
                })
                setbearers(data)
            })
    }, []);
    return (
        <div>
            <Helmet>
                <title>ECoRSC - Central Office Bearers</title>
            </Helmet>
            <div className='container central-office-bearers'>
                <Navbar />
                <br />
                <h4>
                    Central Office Bearers
                </h4>
                <Row>
                    {bearers.filter((b) => b.location === 'Central Office').sort((a, b) => a.time - b.time).map((bearer, i) =>
                        <Col sm={6} className="p-1" key={i}>
                            <Card className='bearers row'>
                                <div className='col-sm-3' style={{ margin: '30px 10px' }}>
                                    <Image src={bearer.image} height="180px" width="150px" alt="cob_img" />
                                </div>
                                <div className='col-sm-6 discrp'>
                                    <h5>{bearer.name}</h5>
                                    <p><CgToolbox size={18} style={{ marginRight: '10px', color: '#000080' }} />{bearer.designation}</p>
                                    <p><MdLocationOn size={18} style={{ marginRight: '10px', color: '#000080' }} />{bearer.location}</p>
                                    <p><FaPhone size={18} style={{ marginRight: '10px', color: '#000080' }} /> {bearer.mobile}</p>
                                </div>
                            </Card>
                        </Col>
                    )}
                </Row>
                <br />
                <br />
                <h4>
                    Divisonal Office Bearers
                </h4>
                <Row>
                    {bearers.filter((b) => b.location !== 'Central Office').map((bearer, i) =>
                        <Col sm={6} className="p-1" key={i}>
                            <Card className='bearers row'>
                                <div className='col-sm-3' style={{ margin: '30px 10px' }}>
                                    <Image src={bearer.image} height="180px" width="150px" alt="cob_img" />
                                </div>
                                <div className='col-sm-6 discrp'>
                                    <h5>{bearer.name}</h5>
                                    <p><CgToolbox size={18} style={{ marginRight: '10px', color: '#000080' }} />{bearer.designation}</p>
                                    <p><MdLocationOn size={18} style={{ marginRight: '10px', color: '#000080' }} />{bearer.location}</p>
                                    <p><FaPhone size={18} style={{ marginRight: '10px', color: '#000080' }} /> {bearer.mobile}</p>
                                </div>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
            <Footer />
        </div>
    );
};

export default CentralOfficeBearers;