import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Homework from './components/Homework';
import Generosity from './components/Generosity';
import Community from './components/Community';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
                <Link to="/homework">Homework</Link>
                <Link to="/generosity">Generosity</Link>
                <Link to="/community">Community</Link>
              </li>
            </ul>
          </nav>
          <div className="app">
            <h1>App Component</h1>
            <Switch>
              <Route exact path="/" render={() => (
                <Dashboard />
              )} />
              <Route exact path="/homework" render={() => (
                <Homework />
              )} />
              <Route exact path="/generosity" render={() => (
                <Generosity />
              )} />
              <Route exact path="/community" render={() => (
                <Community />
              )} />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );

  }
}

export default App;
