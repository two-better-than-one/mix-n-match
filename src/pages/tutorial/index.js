// T U T O R I A L

import './tutorial.css';
import back from '../../images/backgrounds/back-of-card.jpg';
import bird from '../../images/easy/bird.jpg';
import bulldog from '../../images/easy/bulldog.jpg';
import cat from '../../images/easy/cat.jpg';
import dog from '../../images/easy/dog.jpg';
import duck from '../../images/easy/duck.jpg';
import lion from '../../images/easy/lion.jpg';
import monkey from '../../images/easy/monkey.jpg';

function Tutorial() {
  return (
    <div className='tutorial-container'>

      <div className='title'>
        <p className='title'>Mix n Match</p>
      </div>

      <div className='tutorial-body'>

        <div className='first-row'>

          <div className='t-card-container'>
            <div className='t-card'>
              <img src={bird} alt='Parrot' title='Parrot' className='side'></img>
              <div className="side back"><img src={back} width='125' alt='back of card' title='back of card' className='side'></img>
              </div>
            </div>
          </div>

          <div className='t-card-container'>
            <div className='t-card'>
              <img src={back} width='125' alt='back of card' title='back of card' className='side'></img>
              <div className="side back"><img src={bulldog} width='125' alt='bulldog' title='bulldog' className='side'></img></div>
            </div>
          </div>

          <div className='t-card-container'>
            <div className='t-card'>
              <img src={back} width='125' alt='back of card' title='back of card' className='side'></img>
              <div className="side back"><img src={cat} width='125' alt='cat' title='cat' className='side'></img></div>
            </div>
          </div>

          <div className='t-card-container'>
            <div className='t-card'>
              <img src={back} width='125' alt='back of card' title='back of card' className='side'></img>
              <div className="side back"><img src={dog} width='125' alt='dog' title='dog' className='side'></img></div>
            </div>
          </div>

        {/* </div>

        <div className='second-row'> */}

          <div className='t-card-container'>
            <div className='t-card'>
              <img src={back} width='125' alt='back of card' title='back of card' className='side'></img>
              <div className="side back"><img src={duck} width='125' alt='duck' title='duck' className='side'></img></div>
            </div>
          </div>

          <div className='t-card-container'>
            <div className='t-card'>
              <img src={back} width='125' alt='back of card' title='back of card' className='side'></img>
              <div className="side back"><img src={lion} width='125' alt='lion' title='lion' className='side'></img></div>
            </div>
          </div>

          <div className='t-card-container'>
            <div className='t-card'>
              <img src={back} width='125' alt='back of card' title='back of card' className='side'></img>
              <div className="side back"><img src={bird} width='125' alt='parrot' title='parrot' className='side'></img></div>
            </div>
          </div>

          <div className='t-card-container'>
            <div className='t-card'>
              <img src={back} width='125' alt='back of card' title='back of card' className='side'></img>
              <div className="side back"><img src={monkey} width='125' alt='monkey' title='monkey' className='side'></img></div>
            </div>
          </div>

        </div>

        <div className='t-instructions'>
          <p>the instructions will go here, how about we add a video here showing how the game is played? like a lot of the game apps have in the app store? instead of having the user read the instructions and clicking on the cards</p>
          </div>

        <div className='t-options'>
          <button className='t-play'><a href='../leaderboard/index.js'>Play a game</a></button>
          <button className='t-board'><a href='../leaderboard/index.js'>Leaderboard</a></button>
          <button className='t-credits'><a href='../credits/index.js'>Credits</a></button>
        </div>

      </div>

    </div>
  );
}

export default Tutorial;
