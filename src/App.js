import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import AccountEntries from './components/AccountEntries.js';
import Footer from './components/Footer.js';

const App = () => (
  <div>
    <Container>
      <Router>
        <div>
          <Route path="/" component={NavBar} />
          <div id="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/users/login" component={Login} />
            <Route exact path="/users/register" component={Register} />
            <Route exact path="/entries" component={AccountEntries} />
          </div>
        </div>
      </Router>
      <Footer />
    </Container>
  </div>
)

export default App;
