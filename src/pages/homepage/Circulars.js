import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa'

const Circulars = () => {
  return (
    <div className="Cirsulars">
      <Container>
        <Row className="gx-5">
          <Col sm={12} md={6} className="p-10">
            <div className="p-3">
              <h3 className="title">Railway Board Circulars</h3>
              <br />
              <Events />
            </div>
          </Col>
          <Col sm={12} md={6} className="p-10">
            <div className="p-3">
              <h3 className="title">ECoRSC PNM Items</h3>
              <br />
              <Events />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Events = () => {
  return (
    <div className="table">
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={18} /> &nbsp; <i>Feb 15, 2018</i>
      </div>
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={18} /> &nbsp; <i>Feb 15, 2018</i>
      </div>
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={18} /> &nbsp; <i>Feb 15, 2018</i>
      </div>
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={18} /> &nbsp; <i>Feb 15, 2018</i>
      </div>

      {/* static */}
      <Row>
        <a href="#" className="link">View More</a>
      </Row>
    </div>
  )
}

export default Circulars