import React from "react";
import HornedBeast from "./HornedBeast";
import "./Main.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      filteredData: this.props.data
    }
  }
  handleChange = (event) => {
    event.preventDefault();
    let selected = event.target.value;
    this.setState({
      value: selected
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newData = this.props.data.filter(elm => parseInt(elm.horns) === parseInt(this.state.value))
    this.setState({ filteredData: newData });
  }


  render() {
    let animals = this.state.filteredData.map(element => {
      return <HornedBeast
        temp={this.props.temp}
        animal={element}
      />
    });
    return (
      <main>
        <Form onSubmit={this.handleSubmit}>
          <legend>Filter by Horns
            <Form.Group>
              <Form.Label>Selected Numbers</Form.Label>
              <Form.Select style={{width:"20%"}} className="options" name="selected" onChange={this.handleChange}>
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Select>
            </Form.Group>
            <button type="submit">Submit</button>
          </legend>
        </Form>
        {animals}
      </main>
    );
  }
}

export default Main;