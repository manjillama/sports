import React from 'react';

import image from '../../../../../public/assets/images/image.jpg';

const Player = props => (
  <div className="player-main-container">
    <div className="player-image-container">
      <img src={image} alt="Player" />
    </div>
    <div className="player-name-container">
      <span>Player 1</span>
    </div>
  </div>
);

export default Player;