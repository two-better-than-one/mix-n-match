import './leaderboard.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import SelectDifficulty from '../select-difficulty';
import Credits from '../credits';


function Leaderboard() {
  return (
    <div className='leaderboardContainer'>
      
      <div className='chart'>
        <h2>Top Scores!</h2>

      </div>

      <div className='leaderboardOptions'>    
        <ul>
          <li>
            <Link to={`/`}>Main Menu</Link>
          </li>
          <li>
            <Link to={`/selectdifficulty`}>Play a game</Link>
          </li>
          <li>
            <Link to={`/credits`}>Credits</Link>
          </li>
        </ul>

      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/selectdifficulty">
          <SelectDifficulty />
        </Route>
        <Route path="/credits">
          <Credits />
        </Route>
      </Switch>

      </div>

    </div>
  );
}

export default Leaderboard;
