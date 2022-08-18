import React from "react";
import HornedBeast from "./HornedBeast";
import "./Main.css";

class Main extends React.Component {
  render() {
    let animals = this.props.data.map(element => {
        return <HornedBeast
          temp={this.props.temp}
          animal={element}
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