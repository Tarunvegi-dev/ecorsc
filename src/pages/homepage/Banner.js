import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Ecorsc_GS from '../../assets/ecorsc_gs.jpeg'
import Ecorsc_president from '../../assets/ecorsc_president.jpeg'
import Nfir_GS from '../../assets/nfir_gs.jpeg'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <center>
                    <h5 className="banner-sub">Welcome to</h5>
                    <p className="Title">
                        East Coast Railway Shramik Congress
                    </p>
                </center>
                <br/>
                <Row>
                    <Col>
                        <Image src={Nfir_GS} width='250px' height='300px' />
                    </Col>
                    <Col>
                        <Image src={Ecorsc_president} width='250px' height='300px' />
                    </Col>
                    <Col>
                        <Image src={Ecorsc_GS} width='250px' height='300px' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner