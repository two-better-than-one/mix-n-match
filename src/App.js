
import React, { Component } from "react";
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


class App extends Component {

  constructor(props) {
    super(props);
    // toggle for hidding the first options
    this.state = {isHidden: false};
  }

  render () {

  var toggle = (e) => {
    this.setState(({ isHidden }) => ({ isHidden: !isHidden }));
  };

  return (
  

    // Landing page
    <div className="App">


      <Router>
      <div className='center'>
        <h1>Mix N Match</h1>

        <nav className={this.state.isHidden ? "hidden" : ""}>
          <ul  className={this.state.isHidden ? "hidden" : ""}>
            <li  className={this.state.isHidden ? "hidden" : ""}>
              <Link 
                to="/tutorial" 
                className={this.state.isHidden ? "hidden" : ""} 
                onClick={toggle}>
                  Tutorial
              </Link>
            </li>
            <li>
              <Link 
                to="/selectdifficulty" 
                className={this.state.isHidden ? "hidden" : ""} 
                onClick={toggle}>
                  Start
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link
                to="/leaderboard" 
                className={this.state.isHidden ? "hidden" : ""} 
                onClick={toggle} >
                  Leaderboard
              </Link>
            </li>
            <li>
              <Link 
                to="/credits"
                className={this.state.isHidden ? "hidden" : ""} 
                onClick={toggle}>
                  Credits
              </Link>
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
}

export default App;
