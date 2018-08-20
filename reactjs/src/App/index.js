import React, { Component } from 'react'

import Navigation from '../Navigation'
import Container from '../Container'
import Textbox from '../Textbox'
import Button from '../Button'

import './index.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Container>
                    <Textbox type="text" text="username" id="username" />
                    <Textbox type="email" text="email" id="email" />
                    <Textbox type="password" text="password" id="password" />
                    <Button />
                </Container>
            </div>
        )
  }
}

export default App
