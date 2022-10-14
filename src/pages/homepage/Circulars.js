import React from 'react';
import { Row } from 'react-bootstrap';
import NewGif from '../../assets/new.gif'
import { withRouter } from 'react-router-dom';

const Circulars = (props) => {
  return (
    <div className="Cirsulars">
      <h3 className="title">Railway Board Circulars</h3>
      <Events items={props.circulars} />
      <Row>
        <a href="/board-circulars" className="link">View More</a>
      </Row>
      <br />
      <h3 className="title">ECoRSC PNM Items</h3>
      <Events items={props.pnmMinutes} />
      <Row>
        <a href="/pnm-items" className="link">View More</a>
      </Row>
    </div >
  )
}

export const Events = (props) => {
  return (
    <ul className="table">
      {props.items?.map((item, i) => {
        return <li className="item" key={i}>
          <p>
            <a href={item.link} target="_blank" rel="noreferrer">{item.title}
            </a>
            <img src={NewGif} height="28px" alt="New Gif" />
          </p>
        </li>
      })}
    </ul>
  )
}

export default withRouter(Circulars);