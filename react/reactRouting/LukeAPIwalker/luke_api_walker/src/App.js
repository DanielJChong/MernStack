//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router } from '@reach/router';

import Form from './components/Form';
import StarWars from './components/StarWars';

function App() {
  return (
    <div className="App">
      <Form/>
      <Router>
          <StarWars path="/:input/:index"/>
      </Router>
    </div>
  );
}

export default App;
