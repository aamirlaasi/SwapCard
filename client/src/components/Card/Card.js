import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.fimage} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Store:</strong> {props.store}
        </li>
        <li>
          <strong>Price:</strong> {props.price}
        </li>
        <li>
          <strong>ExpDate:</strong> {props.expdate}
        </li>
      </ul>
    </div>
  </div>
);

export default Card;
