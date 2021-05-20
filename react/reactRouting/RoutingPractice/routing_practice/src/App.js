//import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';

import Home from './components/Home';
import Word from './components/Word';
import Validator from './components/Validator';

function App() {
  return (
    <div className="App">
      <Router>
            <Home path="/home"/>
            <Validator path="/:input"/>
            <Word path="/:word/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
