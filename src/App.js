

import backofcard from './images/backgrounds/back-of-card.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Tutorial from './pages/tutorial';
import SelectDifficulty from './pages/select-difficulty';
import Leaderboard from './pages/leaderboard';
import Credits from './pages/credits';


import './App.css';

function App() {
  return (
    
    // Landing page
    <div className="App">


      <header className="App-header">
        <p> Mix n Match  </p>
        <img src={backofcard} className="App-logo" alt="logo" />


      <Router>
      <div className='center'>
        <h1>Mix N Match</h1>

        <nav>
          <ul>
            <li>
              <Link to="/tutorial">Tutorial</Link>
            </li>
            <li>
              <Link to="/selectdifficulty">Start</Link>
            </li>
            
          </ul>

          <ul>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/credits">Credits</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tutorial">
            <Tutorial />
          </Route>
          <Route path="/selectdifficulty">
            <SelectDifficulty />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
    
  );
}


export default App;
