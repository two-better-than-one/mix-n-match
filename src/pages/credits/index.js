import React from 'react';
import '../../style/reset.css';
import './credits.css';
import marino from '../../images/backgrounds/marino.jpg';
import shad from '../../images/backgrounds/shad.jpg';

function Credits() {
  return (
    <div className='container'>
      <p className='title'>Mix n Match</p>
      <p className='makers'>Brought to you by:</p>

        <img src={shad} width='150' alt='Shad Lee' title='Shad Lee' className='shad'></img>
        <img src={marino} width='150' alt='Mariño Carranza' title='Mariño Carranza' className='marino'></img>

        <p className='s-portfolio'><a href='#'>Portfolio</a></p>
        <p className='s-linked'><a href='https://www.linkedin.com/in/shad-lee/'>LinkedIn</a></p>
        <p className='s-github'><a href='https://github.com/sl8305'>GitHub</a></p>

        <p className='m-portfolio'><a href='https://pmcarranza.github.io/MarinoCarranza/'>Portfolio</a></p>
        <p className='m-linked'><a href='https://www.linkedin.com/in/marino-carranza-160a99177/'>LinkedIn</a></p>
        <p className='m-github'><a href='https://github.com/PMCarranza'>GitHub</a></p>

        <div className='nested'>
          <p className='menu'><a href='../leaderboard/index.js'>Menu</a></p>
          <p className='play'><a href='../select-difficulty/index.js'>Play a Game</a></p>
          <p className='board'><a href='../leaderboard/index.js'>Leaderboard</a></p>
        </div>

    </div>

  );
}

export default Credits;
