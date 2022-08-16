import React from "react";
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      favs:0,
    }
  }
  favorite = () => {
    this.setState({
      favs:this.state.favs+1
    });
  }
  render() {
    return (
      <div className="animals">

        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.title} />
        <p>{this.props.description}</p>
        <p>{this.state.favs} ❤️</p>
        <Button onClick={this.favorite} as="a" variant="primary">Favorite</Button>
      </div>
    );
  }
}

export default HornedBeast;