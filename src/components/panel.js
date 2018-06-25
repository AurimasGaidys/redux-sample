import React, { Component } from "react";

import Modal from "./modal";

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  onToggle = event => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    return (
      <div className="Panel">
        <h2 title={this.props.item.name}>{this.props.item.name}</h2>
        <h4>{this.props.item.city}</h4>
        <h4>{this.props.item.phone}</h4>
        <h4>{this.props.item.website}</h4>
        <h4>{this.props.item.companyName}</h4>
        <button onClick={this.onToggle}>Edit</button>
        {this.state.toggle ? (
          <Modal
            item={this.props.item}
            close={this.onToggle}
            updateUser={this.props.updateUser}
          />
        ) : null}
      </div>
    );
  }
}

export default Panel;
