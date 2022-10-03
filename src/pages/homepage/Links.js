import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { MdOutlineHealthAndSafety } from 'react-icons/md'

const Links = () => {
    return (
        <div className="Links">
            <Container>
                <Row className="gx-5">
                    <h3 className="title">Important Links</h3>
                    <br />
                    <br />
                    <br />
                    <Col xs={12} sm={6} md={4}>
                        <div className="p-3 Link">
                            <div className="icon">
                                <MdOutlineHealthAndSafety size={28} />
                            </div>
                            <p>Railway Rule</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} >
                        <div className="p-3 Link">
                            <div className="icon">
                                <MdOutlineHealthAndSafety size={28} />
                            </div>
                            <p>Shortest Path</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} >
                        <div className="p-3 Link">
                            <div className="icon">
                                <MdOutlineHealthAndSafety size={28} />
                            </div>
                            <p>PNR Status</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Links