import React, { useState } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Button, Card, Col, Form } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa'
import { MdLocationCity, MdEmail } from 'react-icons/md'
import { firestore } from '../../firebase/firebase-utils'
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet'

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isSubmitting, setisSubmitting] = useState(false);

    const onSubmit = (data) => {
        setisSubmitting(true)
        firestore.collection('contact-form').doc().set(data)
            .then(() => {
                setisSubmitting(false)
                alert('Response Recorded Successfully')
                window.location.reload(true)
            })
    }

    return (
        <div>
            <Helmet>
                <title>ECoRSC - Contact</title>
            </Helmet>
            <div className='container contact'>
                <Navbar />
                <br />
                <h2>Contact Information</h2>
                <div className='row contact-cards'>
                    <Col sm={12} md={6} lg={4}>
                        <Card className='contact-card'>
                            <h3>Address</h3>
                            <div className='address'>
                                <MdLocationCity size={25} />
                                &nbsp;&nbsp;&nbsp;<span style={{ color: '#000080', fontWeight: '600', fontSize: '16px' }}>Address: </span><br /><br />
                                <p>
                                    East Coast Railway Shramik Congress,

                                    "Shashi Bhusan Bhavan",
                                    CEG Prem Office,
                                    Behind DRM office,
                                    Waltair Division,

                                    Near Rajabhasha Bhavan,
                                    Visakhapatnam,
                                    Andhra Pradesh,
                                    PIN-530004,
                                </p>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className='contact-card'>
                            <h3>Phone</h3>
                            <div className='phone'>
                                <FaPhone size={23} />
                                &nbsp;&nbsp;&nbsp;<span style={{ color: '#000080', fontWeight: '500', fontSize: '15px' }}>Phone: &nbsp;044-26701425</span><br /><br />
                                <FaPhone size={23} />
                                &nbsp;&nbsp;&nbsp;<span style={{ color: '#000080', fontWeight: '500', fontSize: '15px' }}>Railway Phone:&nbsp; 044-26701425</span><br /><br />
                            </div>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className='contact-card'>
                            <h3>Email</h3>
                            <div className='email'>
                                <MdEmail size={23} />
                                &nbsp;&nbsp;&nbsp;<span style={{ color: '#000080', fontWeight: '500', fontSize: '15px' }}>Email: &nbsp;ecorsc@gmail.com</span><br /><br />
                            </div>
                        </Card>
                    </Col>
                </div>
                <div className='row' style={{ marginBottom: '80px', padding: "10px" }}>
                    <Col sm={12} md={6} className='contactForm'>
                        <h2>Get In Touch</h2>
                        <Form style={{ marginTop: '40px' }} onSubmit={handleSubmit(onSubmit)}>
                            <div className="group">
                                <input type="text" {...register("name", { required: true })} />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Name</label>
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="group">
                                <input type="text" {...register("email")} />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Email</label>
                            </div>
                            <div className="group">
                                <input type="text" {...register("phone", { required: true })} />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Mobile number</label>
                                {errors.phone && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="group">
                                <input type="text" {...register("subject", { required: true })} />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Subject</label>
                                {errors.subject && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="group" >
                                <textarea type="textarea" {...register("message", { required: true })} rows="4"></textarea><span className="highlight"></span><span className="bar"></span>
                                <label>Message</label>
                                {errors.message && <span className="text-danger">This field is required</span>}
                            </div>
                            <Button className='sendBtn' type='submit' disabled={isSubmitting}>{isSubmitting ? 'Sending..' : 'SEND MESSAGE'}</Button>
                        </Form>
                    </Col>
                    <Col sm={12} md={6} className='location'>
                        <h2>Office Location</h2>
                        <Card>
                            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.4297918473676!2d83.29925899999999!3d17.7243769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394301dc8199a7%3A0xd34e7c6f0aca6297!2sECORSC%20CEG%20office!5e0!3m2!1sen!2sin!4v1667309487047!5m2!1sen!2sin"
                                width="100%" height="500px" frameborder="0" allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
                        </Card>
                    </Col>
                </div>
                <Footer />
            </div>
        </div >
    );
};

export default Contact;