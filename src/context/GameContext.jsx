import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame debe ser usado dentro de GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }) => {
  const [selectedClassroom, setSelectedClassroom] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const resetGame = () => {
    setSelectedClassroom('');
    setSelectedGender('');
    setSelectedName('');
    setCurrentStep(1);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const value = {
    selectedClassroom,
    setSelectedClassroom,
    selectedGender,
    setSelectedGender,
    selectedName,
    setSelectedName,
    currentStep,
    setCurrentStep,
    nextStep,
    resetGame
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};
