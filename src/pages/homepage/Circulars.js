import React from 'react';
import { Row } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa'

const Circulars = () => {
  return (
    <div className="Cirsulars">
        <h3 className="title">Railway Board Circulars</h3>
        <Events />
        <br/>
        <h3 className="title">ECoRSC PNM Items</h3>
        <Events />
    </div >
  )
}

const Events = () => {
  return (
    <div className="table">
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={16} /> &nbsp; <i>Feb 15, 2018</i>
      </div>
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={16} /> &nbsp; <i>Feb 15, 2018</i>
      </div>
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={16} /> &nbsp; <i>Feb 15, 2018</i>
      </div>
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={16} /> &nbsp; <i>Feb 15, 2018</i>
      </div>
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={16} /> &nbsp; <i>Feb 15, 2018</i>
      </div>
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={16} /> &nbsp; <i>Feb 15, 2018</i>
      </div>
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={16} /> &nbsp; <i>Feb 15, 2018</i>
      </div>
      <div className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
        <FaCalendarAlt size={16} /> &nbsp; <i>Feb 15, 2018</i>
      </div>

      {/* static */}
      <Row>
        <a href="#!" className="link">View More</a>
      </Row>
    </div>
  )
}

export default Circulars