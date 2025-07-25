import React from 'react';
import { useGame } from '../context/GameContext';
import './Congratulations.css';

const Congratulations = () => {
  const { selectedName, resetGame } = useGame();

  return (
    <div className="congratulations">
      <div className="celebration-container">
        <div className="stars">
          <div className="star star-1">⭐</div>
          <div className="star star-2">⭐</div>
          <div className="star star-3">⭐</div>
          <div className="star star-4">⭐</div>
          <div className="star star-5">⭐</div>
          <div className="star star-6">⭐</div>
        </div>

        <div className="main-message">
          <h1 className="congratulations-title">!כל הכבוד</h1>
          <div className="success-icon">🎉</div>
          <p className="success-message">
            !כתבת נכון את השם שלך
          </p>
          <div className="name-display">
            {selectedName}
          </div>
        </div>

        <div className="celebration-emojis">
          <span className="emoji emoji-1">🌟</span>
          <span className="emoji emoji-2">🎊</span>
          <span className="emoji emoji-3">✨</span>
          <span className="emoji emoji-4">🎈</span>
          <span className="emoji emoji-5">🌈</span>
          <span className="emoji emoji-6">🏆</span>
        </div>

        <button className="play-again-button" onClick={resetGame}>
          שחק שוב
        </button>
      </div>
    </div>
  );
};

export default Congratulations;
