import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BaseRouter from './Routes'

function App() {
  return (
    <Router>
      <Switch>
        <BaseRouter />       
      </Switch>
    </Router>
  );
}

export default App;
