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
            <Navbar />
            <div className='container central-office-bearers'>
                <Card className='p-3 header'>
                    <h3>
                        Central Office Bearers
                    </h3>
                </Card>
                <Row>
                    <Col className='grid-col'>
                        {bearers.map((_) => <Card className='bearers'>
                            <div className='row'>
                                <div className='col-sm-6' style={{ margin: '30px 0' }}>
                                    <center>
                                        <Image src={COB1} height="220px" width="180px" />
                                    </center>
                                </div>
                                <div className='col-sm-6 discrp'>
                                    <h3>Dr. M. Raghavaiah  </h3>
                                    <p><CgToolbox size={25} style={{ marginRight: '10px', color: '#000080' }} />President</p>
                                    <p><MdLocationOn size={25} style={{ marginRight: '10px', color: '#000080' }} />Central Office</p>
                                    <p><FaPhone size={25} style={{ marginRight: '10px', color: '#000080' }} /> 9848014130</p>
                                </div>
                            </div>
                        </Card>)}
                    </Col>
                </Row>
                <Card className='p-3 header' style={{ marginTop: '30px' }}>
                    <h3>
                        Divisonal Office Bearers
                    </h3>
                </Card>
                <Row>
                    <Col className='grid-col'>
                        {bearers.map((_) => <Card className='bearers'>
                            <div className='row'>
                                <div className='col-sm-6' style={{ margin: '30px 0' }}>
                                    <center>
                                        <Image src={COB1} height="220px" width="180px" />
                                    </center>
                                </div>
                                <div className='col-sm-6 discrp'>
                                    <h3>Dr. M. Raghavaiah  </h3>
                                    <p><CgToolbox size={25} style={{ marginRight: '10px', color: '#000080' }} />President</p>
                                    <p><MdLocationOn size={25} style={{ marginRight: '10px', color: '#000080' }} />Central Office</p>
                                    <p><FaPhone size={25} style={{ marginRight: '10px', color: '#000080' }} /> 9848014130</p>
                                </div>
                            </div>
                        </Card>)}
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    );
};

export default CentralOfficeBearers;