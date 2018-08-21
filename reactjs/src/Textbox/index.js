import React, { Component } from 'react';

import './index.css';

class Textbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
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
