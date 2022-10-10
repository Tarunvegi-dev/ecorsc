import React, { useState } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import COB1 from '../../assets/nfir_gs.jpeg'
import { CgToolbox } from 'react-icons/cg'
import { MdLocationOn } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import Footer from '../../components/Footer'


const CentralOfficeBearers = () => {
    //eslint-disable-next-line
    const [bearers, setbearers] = useState([1, 2, 3, 4]);
    return (
        <div>
            <div className='container central-office-bearers'>
                <Navbar />
                <br />
                <h4>
                    Central Office Bearers
                </h4>
                <Row>
                    {bearers.map((_) =>
                        <Col sm={6} className="p-1">
                            <Card className='bearers'>
                                <div className='bearers-inner'>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <center>
                                            <Image src={COB1} height="200px" />
                                        </center>
                                    </div>
                                    <div className='col-sm-6 discrp'>
                                        <h5>Dr. M. Raghavaiah  </h5>
                                        <p><CgToolbox size={18} style={{ marginRight: '10px', color: '#000080' }} />President</p>
                                        <p><MdLocationOn size={18} style={{ marginRight: '10px', color: '#000080' }} />Central Office</p>
                                        <p><FaPhone size={18} style={{ marginRight: '10px', color: '#000080' }} /> 9848014130</p>
                                    </div>
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
                    {bearers.map((_) =>
                        <Col sm={6} className="p-1">
                            <Card className='bearers'>
                                <div className='bearers-inner'>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <center>
                                            <Image src={COB1} height="200px" />
                                        </center>
                                    </div>
                                    <div className='col-sm-6 discrp'>
                                        <h5>Dr. M. Raghavaiah  </h5>
                                        <p><CgToolbox size={18} style={{ marginRight: '10px', color: '#000080' }} />President</p>
                                        <p><MdLocationOn size={18} style={{ marginRight: '10px', color: '#000080' }} />Central Office</p>
                                        <p><FaPhone size={18} style={{ marginRight: '10px', color: '#000080' }} /> 9848014130</p>
                                    </div>
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