import placeholder from './images/place-holder.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SelectDifficulty from './pages/select-difficulty';
import Credits from './pages/credits';

import './App.css';

function App() {
  return (
    


    <div className="App">
      <header className="App-header">
        <p> Mix n Match  </p>
        <img src={placeholder} className="App-logo" alt="logo" />

      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/selectdifficulty">Select Difficulty</Link>
            </li>
            <li>
              <Link to="/credits">Credits</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/selectdifficulty">
            <SelectDifficulty />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


      </header>
    </div>
  );
}



function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}



export default App;
