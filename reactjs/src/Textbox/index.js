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
      <div className="form-group">
        <label>{this.props.text}</label>
        <input
          type={this.props.type}
          className="form-control"
          id={this.props.id}
          placeholder={this.props.placeholder}
          maxlength="30"
        />
      </div>
    );
  }
}

export default Textbox;
