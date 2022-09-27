import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
//  import Image from 'next/image'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <center>
                    <h5 className="banner-sub">Welcome to</h5>
                    <p className="Title">
                        East Coast Railway Shramik Sangh
                    </p>
                </center>
                <br/>
                <Row>
                    <Col>
                        <Image src='https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png' width='250px' height='250px' />
                    </Col>
                    <Col>
                        <Image src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' width='250px' height='250px' />
                    </Col>
                    <Col>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyW1v_mM9vuI9Sd7amcifLxqjlFN7bXlvv3LLtPHuLm1khSZwqsovb7bbOWb-z5CRwqnU&usqp=CAU' width='250px' height='250px' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner