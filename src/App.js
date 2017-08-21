import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import NavBar from './components/NavBar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer.js'

const App = () => (
  <div>
    <Container>
      <NavBar />
      <div id="content">
        <Home />
      </div>
      <Footer />
    </Container>
  </div>
)

export default App;
