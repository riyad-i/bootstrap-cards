import React from "react";
import "./styles.css";
//import card1
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import cardsArr from './data'

const cards = cardsArr.map((ele, ind) => {
  return (
    <Card1
      img={ele.img}
      title={ele.title}
      text={ele.text}
      url={ele.url}
      key={ind}
      />
  );
})

console.log('this is cards:', cards);

export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {/* <Card1 />
        <Card2 /> */}
        {cards}
      </section>
    </div>
  );
}
