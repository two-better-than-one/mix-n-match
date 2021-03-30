
import './leaderboard.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import SelectDifficulty from '../select-difficulty';
import Credits from '../credits';
import handleClick from '../../App';

function Leaderboard(props) {

  // function to loop through the leaderboard
  return (
    <div className='leaderboardContainer'>
      
      <h1 className='leaderboard-banner'>TOP SCORES!</h1>
      <div className='chart-container'>
        <div className='chart'>
          <div className='score-row red-row'>
            <p>Luigi</p>
            <p>12/20/2020</p>
            <p>10,000</p>
          </div>

          <div className='score-row'>
            <p>Peach</p>
            <p>12/10/2020</p>
            <p>15,000</p>
          </div>

          <div className='score-row red-row'>
            <p>Mario</p>
            <p>12/25/2020</p>
            <p>100,000</p>
          </div>

          <div className='score-row'>
            <p>Toad</p>
            <p>12/21/2020</p>
            <p>1,000</p>
          </div>

          <div className='score-row red-row'>
            <p>Bowser</p>
            <p>12/23/2020</p>
            <p>50,000</p>
          </div>

          <div className='score-row'>
            <p>Yoshi</p>
            <p>12/29/2020</p>
            <p>110,000</p>
          </div>

          <div className='score-row red-row'>
            <p>User 1</p>
            <p>12/19/2020</p>
            <p>110,000</p>
          </div>

          <div className='score-row'>
            <p>User 2</p>
            <p>12/1/2020</p>
            <p>11,000</p>
          </div>

          <div className='score-row red-row'>
            <p>User 3</p>
            <p>12/29/2020</p>
            <p>56,000</p>
          </div>

          <div className='score-row'>
          <p>User 4</p>
          <p>12/11/2020</p>
          <p>74,000</p>
        </div>
        </div>

        <div className='leaderboardOptions'>    
        <ul>
          <li>
            <Link 
              to={`/`}  >
              {/* onClick={handleClick}> */}
              Main Menu
            </Link>
          </li>
          <li>
            <Link 
              to={`/selectdifficulty`}>
              {/* onClick={handleClick}> */}
              Play a game
            </Link>
          </li>
          <li>
            <Link 
              to={`/credits`}  >
              {/* onClick={handleClick}> */}
              Credits
            </Link>
          </li>
        </ul>

      <Switch>
        <Route exact path="/"/>
        <Route path="/selectdifficulty" component={SelectDifficulty}/>
        <Route path="/credits" component={Credits} />
      </Switch>

      </div>
      </div>

    </div>
  );
}

export default Leaderboard;
