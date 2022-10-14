import React from 'react';
import { Row } from 'react-bootstrap';
import NewGif from '../../assets/new.gif'

const Circulars = (props) => {
  return (
    <div className="Cirsulars">
      <h3 className="title">Railway Board Circulars</h3>
      <Events items={props.circulars} />
      <br />
      <h3 className="title">ECoRSC PNM Items</h3>
      <Events items={props.pnmMinutes} />
    </div >
  )
}

const Events = (props) => {
  return (
    <ul className="table">
      {props.items?.map((circular, i) => {
        return <li className="item" key={i}>
          <a href={circular.link} rel="noreferrer" target="_blank">{circular.title}
            <img src={NewGif} height="28px" alt="New Gif" />
          </a>
        </li>
      })}
      <Row>
        <a href="/circulars" className="link">View More</a>
      </Row>
    </ul>
  )
}

export default Circulars