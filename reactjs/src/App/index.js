import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../PageHome';
import Signup from '../PageSignup';
import Signin from '../PageSignin';

import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Switch>
            <Route exact path="/" Component={Home} />
            <Route path="/signup" Component={Signup} />
            <Route path="/signin" Component={Signin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
