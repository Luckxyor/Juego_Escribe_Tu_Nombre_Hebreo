import React from 'react';
import { useGame } from '../context/GameContext';
import { classroomData } from '../data/classroomData';
import './NameSelection.css';

const NameSelection = () => {
  const { selectedClassroom, selectedGender, setSelectedName, nextStep, resetGame } = useGame();

  const availableNames = classroomData[selectedClassroom]?.[selectedGender] || [];

  const handleNameSelect = (name) => {
    setSelectedName(name);
    // Avanzar al paso de escritura del nombre
    setTimeout(() => {
      nextStep();
    }, 500);
  };

  const handleGoBack = () => {
    resetGame();
  };

  if (!selectedClassroom || !selectedGender) {
    return (
      <div className="name-selection">
        <h1 className="title">שגיאה</h1>
        <p className="subtitle">אנא התחל מחדש</p>
        <button className="back-button" onClick={handleGoBack}>
          התחל מחדש
        </button>
      </div>
    );
  }

  return (
    <div className="name-selection">
      <p className="subtitle">
        כיתה: {selectedClassroom} | {selectedGender === 'male' ? 'ילד' : 'ילדה'}
      </p>
      
      <div className="names-grid">
        {availableNames.map((name, index) => (
          <button
            key={index}
            className="name-button"
            onClick={() => handleNameSelect(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <button className="back-button" onClick={handleGoBack}>
        התחל מחדש
      </button>
    </div>
  );
};

export default NameSelection;
