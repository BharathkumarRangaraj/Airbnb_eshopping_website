import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

export default function Apps(props) {
  return (
    <div className="card">
      {props.openspot === 0 && <div className="card-badge">SOLD OUT</div>}
      <img className="katieimage" src={props.item.coverimg} />
      <div className="rating">
        <img className="ratingimg" src="./star.png" />
        <span className="ratingnumber">
          <b>{props.item.stats.rating}</b>
        </span>
        <span className="five">{props.item.stats.reviewcount} .</span>
        <span className="five">{props.item.country}</span>
      </div>
      <p className="lifelession">{props.item.title}</p>
      <p className="rate">
        <b> From {props.item.price}/person</b>
      </p>
    </div>
  );
}
