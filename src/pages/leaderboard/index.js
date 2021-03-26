
import './leaderboard.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import SelectDifficulty from '../select-difficulty';
import Credits from '../credits';
import toggle from '../../App';

function Leaderboard() {

  return (
    <div className='leaderboardContainer'>
      
      <div className='chart'>
        <div className='topScore'>
          <h2>Top Scores!</h2>
        </div>
      </div>

      <div className='leaderboardOptions'>    
        <ul>
          <li>
            <Link to={`/`}  onClick={toggle}>Main Menu</Link>
          </li>
          <li>
            <Link to={`/selectdifficulty`}  onClick={toggle}>Play a game</Link>
          </li>
          <li>
            <Link to={`/credits`}  onClick={toggle}>Credits</Link>
          </li>
        </ul>

      <Switch>
        <Route exact path="/"/>
        <Route path="/selectdifficulty" component={SelectDifficulty}/>
        <Route path="/credits" component={Credits} />
      </Switch>

      </div>

    </div>
  );
}

export default Leaderboard;
