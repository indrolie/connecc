import React, { Component } from 'react';

import './index.css';

class Textbox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      text: 'Username'
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        <p className="label">{this.props.text}</p>
        <input
          className="textbox"
          name={this.props.name}
          type={this.props.type}
          onChange={this.handleChange}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default Textbox;
