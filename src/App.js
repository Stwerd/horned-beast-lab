import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import data from './data.json'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      animal: {}
    }
  }

  handleShowModal = (animal) => {
    console.log(animal);
    this.setState({
      showModal: true,
      animal: animal
    });
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    });
  }


  render() {
    return (
      <>
        <Header />
        <Main data={data} temp={this.handleShowModal} />
        <Footer />
        <SelectedBeast
          animal={this.state.animal}
          show={this.state.showModal}
          onHide={this.handleHideModal}
        />
      </>
    );
  }
}

export default App;