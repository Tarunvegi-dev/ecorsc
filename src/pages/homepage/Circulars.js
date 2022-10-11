import React from 'react';
import { Row } from 'react-bootstrap';
import NewGif from '../../assets/new.gif'

const Circulars = () => {
  return (
    <div className="Cirsulars">
      <h3 className="title">Railway Board Circulars</h3>
      <Events />
      <br />
      <h3 className="title">ECoRSC PNM Items</h3>
      <Events />
    </div >
  )
}

const Events = () => {
  return (
    <ul className="table">
      <li className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain
          <img src={NewGif} height="28px" alt="New Gif" />
        </p>
      </li>
      <li className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
      </li>
      <li className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain
          <img src={NewGif} height="28px" alt="New Gif" />
        </p>
      </li>
      <li className="item">
        <p>29th National Convention of NFIR to be held on 17th & 18th September 2019 at Ujjain</p>
      </li>

      {/* static */}
      <Row>
        <a href="#!" className="link">View More</a>
      </Row>
    </ul>
  )
}

export default Circulars