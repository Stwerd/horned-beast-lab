import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"
import "./Main.css";

class Main extends React.Component {
  render() {
    let animals = [];
    data.forEach(element => {
      animals.push(
        <HornedBeast
          imageUrl={element.image_url}
          description={element.description}
          alt={element.keyword}
          horns={element.horns}
          title={element.title}
        />
      )
    });
    return (
      <main>
        {animals}
      </main>
    );
  }
}

export default Main;