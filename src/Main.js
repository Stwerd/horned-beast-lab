import React from "react";
import HornedBeast from "./HornedBeast";
import "./Main.css";

class Main extends React.Component {
  render() {
    let animals = this.props.data.map(element => {
        return <HornedBeast
          imageUrl={element.image_url}
          description={element.description}
          alt={element.keyword}
          horns={element.horns}
          title={element.title}
        />
    });
    return (
      <main>
        {animals}
      </main>
    );
  }
}

export default Main;