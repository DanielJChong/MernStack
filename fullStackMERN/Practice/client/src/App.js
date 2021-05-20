import './App.css';
import React from 'react';
import { Router, Redirect } from '@reach/router';

import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/people/"/>
        <Detail path="/people/:id" />
        <Update path="/people/:id/edit"/>
        <Redirect from="/" to="/people" noThrow/>
      </Router>
    </div>
  );
}

export default App;
