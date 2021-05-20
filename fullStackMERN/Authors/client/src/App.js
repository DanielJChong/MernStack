import './App.css';
import React from 'react';
import { Router, Redirect } from '@reach/router';

import Main from './views/Main';
import Add from './views/Add';
import Update from './views/Update';



function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Add path="/new"/>
        <Update path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
