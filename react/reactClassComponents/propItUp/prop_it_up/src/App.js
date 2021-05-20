//import logo from './logo.svg';
import './App.css';
import PersonCardComponent from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCardComponent firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black"/>
      <PersonCardComponent firstName="John" lastName="Smith" age={ 88 } hairColor="Brown"/>
      <PersonCardComponent firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown"/>
      <PersonCardComponent firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown"/>
    </div>
  );
}

export default App;
