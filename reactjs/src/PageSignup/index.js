import React, { Component } from 'react';

import Navigation from '../Navigation';
import Container from '../Container';
import Textbox from '../Textbox';
import Button from '../Button';
import Heading1 from '../Heading1';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <Navigation />
        <Container>
          <Heading1 text="Sign up" />
          <Textbox
            type="text"
            text="Username"
            id="username"
            placeholder="Your Username"
          />
          <Textbox
            type="email"
            text="Email"
            id="email"
            placeholder="Your Email"
          />
          <Textbox
            type="password"
            text="Password"
            id="password"
            placeholder="Your Password"
          />
          <Button type="submit" text="Sign up" />
        </Container>
      </div>
    );
  }
}

export default Signup;
