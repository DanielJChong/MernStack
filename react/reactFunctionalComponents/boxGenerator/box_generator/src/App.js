//import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import Boxes from './components/Boxes';
import DisplayBoxes from './components/DisplayBoxes';


function App() {
  const [currentBox, setCurrentBox] = useState("There are no boxes");
    
  const makeNewBox = ( newBox ) => {
      setCurrentBox( newBox );
  }

  return (
    <div className="App">
      <Boxes onNewBox={ makeNewBox } />
      <DisplayBoxes box={ currentBox } />
    </div>
  );
}

export default App;
