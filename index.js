import React from "react";
import ReactDOM from "react-dom";
import Apps from "./Apps.js";
import Nav from "./Navv.js";
import Hero from "./Hero.js";
import "./App.css";
import data from "./data.js";

function Card() {
  const cards = data.map((item) => {
    return <Apps key={item.id} item={item} />;
  });

  return (
    <div>
      <Nav />
      <Hero />
      <div className="cardss"> {cards}</div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card />
  </div>,
  document.getElementById("root")
);
