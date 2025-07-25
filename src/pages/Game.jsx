import React from 'react';
import { useGame } from '../context/GameContext';
import ClassroomSelection from './ClassroomSelection';
import GenderSelection from './GenderSelection';
import NameSelection from './NameSelection';
import NameWriting from './NameWriting';
import Congratulations from './Congratulations';

const Game = () => {
  const { currentStep } = useGame();

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <ClassroomSelection />;
      case 2:
        return <GenderSelection />;
      case 3:
        return <NameSelection />;
      case 4:
        return <NameWriting />;
      case 5:
        return <Congratulations />;
      default:
        return <ClassroomSelection />;
    }
  };

  return (
    <div className="game-container">
      {renderCurrentStep()}
    </div>
  );
};

export default Game;
