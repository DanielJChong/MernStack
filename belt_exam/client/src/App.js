import './App.css';
import React from 'react';
import { Router } from '@reach/router';

import Main from './views/Main';
import Add from './views/Add';
import Update from './views/Update';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Add path="/pets/new"/>
        <Update path="/pets/:id/edit"/>
        <Detail path="/pets/:id"/>
      </Router>
    </div>
  );
}

export default App;
