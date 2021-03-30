
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

  // state
  constructor(props) {
    super(props);

    this.state = {isHidden: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
    
  handleClick() {
    this.setState(state => ({
      isHidden: !state.isHidden
    }));
  }



  render() {

    var test = {
      name: 'David Lam',
      date: '12/20/2020',
      score: 100000
    }

    return(
      <div className="App">

        <Router>
          <div className='center'>
            <h1 className={this.state.isHidden ? 'hidden' : ''}>
              Mix N Match
            </h1>

            <nav className={this.state.isHidden ? 'hidden' : ''}>
              <ul className={this.state.isHidden ? 'hidden' : ''}>
                <li className={this.state.isHidden ? 'hidden' : ''}>
                  <Link 
                    to="/tutorial" 
                    className={this.state.isHidden ? 'hidden' : ''}
                    onClick={this.handleClick}>
                    Tutorial
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/selectdifficulty"
                    className={this.state.isHidden ? 'hidden' : ''}
                    onClick={this.handleClick}>
                    Start
                  </Link>
                </li>

              </ul>

              <ul className={this.state.isHidden ? 'hidden' : ''}>
                <li className={this.state.isHidden ? 'hidden' : ''}>
                  <Link 
                    to="/leaderboard"
                    className={this.state.isHidden ? 'hidden' : ''}
                    onClick={this.handleClick}>
                    Leaderboard
                  </Link>
                </li>
                <li className={this.state.isHidden ? 'hidden' : ''}>
                  <Link 
                    to="/credits"
                    className={this.state.isHidden ? 'hidden' : ''}
                    onClick={this.handleClick}>
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
