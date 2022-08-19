import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap';


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Card className="animals">
          <h2>{this.props.animal.title}</h2>
          <img src={this.props.animal.image_url} alt={this.props.animal.title} />
          <p>{this.props.animal.description}</p>
          <p>{this.props.animal.favs} ❤️</p>
        </Card>
      </Modal>
    );
  }
}

export default SelectedBeast;
