
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { useState } from 'react';

import Tutorial from './pages/tutorial';
import SelectDifficulty from './pages/select-difficulty';
import Leaderboard from './pages/leaderboard';
import Credits from './pages/credits';

import './App.css';

function App() {

  const [isHidden, toggleHidden] = useState(false);

  const toggle = (e) => {
    // e.preventDefault();
    console.log('toggled');
    toggleHidden(!isHidden);
  };

  return (
  

    // Landing page
    <div className="App">


      <Router>
      <div className='center'>
        <h1>Mix N Match</h1>

        <nav className={isHidden ? "hidden" : ""}>
          <ul  className={isHidden ? "hidden" : ""}>
            <li  className={isHidden ? "hidden" : ""}>
              <Link to="/tutorial" className={isHidden ? "hidden" : ""} onClick={toggle}>Tutorial</Link>
            </li>
            <li>
              <Link to="/selectdifficulty" onClick={toggle}>Start</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/leaderboard" onClick={toggle}>Leaderboard</Link>
            </li>
            <li>
              <Link to="/credits" onClick={toggle}>Credits</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/selectdifficulty" component={SelectDifficulty} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/credits" component={Credits} />
        </Switch>
        
      </div>
    </Router>
  </div>
    
  );
}

export default App;
