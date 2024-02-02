import React, { useState } from 'react';
import './gameslist.css';
import CardFader from '../faders/cardfader';

const GamesList = ({ games }) => {
  const { image, name } = games;
  const [isFaderExpanded, setIsFaderExpanded] = useState(false);

  const handleFaderExpand = () => {
    setIsFaderExpanded(true);
  };

  const handleFaderShrink = () => {
    setIsFaderExpanded(false);
  };

  const ChangeColor = (name) => {
    switch(name) {
        case 'Minecraft':
            return 'green'
        case 'Tetris':
            return 'brown'
        case 'Fall Guys':
            return 'blue' 
        default:
          // code block
      } 
};

  return (
    <div className={`card ${isFaderExpanded ? 'expanded' : 'notExpanded'}`}>
      <div
        className="card-front"
        style={{
          backgroundImage: `url(${image})`,
        }}
        data-color={`${ChangeColor(name)}`}
        onMouseEnter={handleFaderExpand}
        onMouseLeave={handleFaderShrink}
      />
      <div className="title">
        <h2>{name}</h2>
      </div>
      <CardFader image={image} />
    </div>
  );
};

export default GamesList;
