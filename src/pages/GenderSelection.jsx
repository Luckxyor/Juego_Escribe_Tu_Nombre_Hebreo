import React from 'react';
import { useGame } from '../context/GameContext';
import HombreImg from '../assets/Hombre.jpg';
import MujerImg from '../assets/Mujer.jpg';
import './GenderSelection.css';

const GenderSelection = () => {
  const { setSelectedGender, nextStep } = useGame();

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    // Pequeña pausa para que el niño vea la selección
    setTimeout(() => {
      nextStep();
    }, 500);
  };

  return (
    <div className="gender-selection">
      
      <div className="gender-buttons">
        <div 
          className="gender-option"
          onClick={() => handleGenderSelect('male')}
        >
          <img src={HombreImg} alt="ילד" className="gender-image" />
          <span className="gender-label">ילד</span>
        </div>
        
        <div 
          className="gender-option"
          onClick={() => handleGenderSelect('female')}
        >
          <img src={MujerImg} alt="ילדה" className="gender-image" />
          <span className="gender-label">ילדה</span>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;
