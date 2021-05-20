//import logo from './logo.svg';
import './App.css';
import {Router, Redirect} from '@reach/router';

import Dashboard from './views/Dashboard';
import NewRentals from './views/NewRentals';
import EditRental from './views/EditRental';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard path="/rentals"/>
        <NewRentals path="/rentals/new"/>
        <EditRental path="/rentals/:id/edit"/>
        <Redirect from="/" to="/rentals" noThrow/>
      </Router>
    </div>
  );
}

export default App;
