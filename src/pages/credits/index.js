import React from 'react';
import '../../style/reset.css';
import './credits.css';
import marino from '../../images/backgrounds/marino.jpg';
import shad from '../../images/backgrounds/shad.jpg';

function Credits() {
  return (
    <div className='container'>

      <div className='title'>
        <p className='title'>Mix n Match</p>
        <p className='sub-title'>Brought to you by:</p>
      </div>

      <div className='main-body'>

        <div className='shad'>
          <div className='card-container'>
            <div className='card'>
              <img src={shad} width='125' alt='Shad Lee' title='Shad Lee' className='side'></img>
              <div className="side back">info about Shad will go here</div>
            </div>
          </div>

          <div className='shad-links'>
            <button className='s-portfolio'><a href='https://sl8305.github.io/efficient-portfolio/'>Portfolio</a></button>
            <button className='s-linked'><a href='https://www.linkedin.com/in/shad-lee/'>LinkedIn</a></button>
            <button className='s-github'><a href='https://github.com/sl8305'>GitHub</a></button>
          </div>


        </div>

        <div className='marino'>
          <div className='card-container'>
            <div className='card'>
              <img src={marino} alt='Mariño Carranza' title='Mariño Carranza' className='side'></img>
              <div className="side back">Guatemalan, husband, father, Front End Dev, soccer player, baseball fan. Order varies depending on needs.</div>
            </div>
          </div>

          <div className='marino-links'>
            <button className='m-portfolio'><a href='https://pmcarranza.github.io/MarinoCarranza/'>Portfolio</a></button>
            <button className='m-linked'><a href='https://www.linkedin.com/in/marino-carranza-160a99177/'>LinkedIn</a></button>
            <button className='m-github'><a href='https://github.com/PMCarranza'>GitHub</a></button>
          </div>


        </div>

        <div className='options'>
          <button className='menu'><a href='../leaderboard/index.js'>Main menu</a></button>
          <button className='play'><a href='../select-difficulty/index.js'>Play a game</a></button>
          <button className='board'><a href='../leaderboard/index.js'>Leaderboard</a></button>
        </div>

      </div>

      <div className='empty'>
      </div>

    </div>

  );
}

export default Credits;
