import React from 'react';
import { useGame } from '../context/GameContext';
import './ClassroomSelection.css';

const ClassroomSelection = () => {
  const { setSelectedClassroom, nextStep } = useGame();

  const classrooms = [
    { name: "בנאים", color: "#FF6B6B" },
    { name: "סופרים", color: "#4ECDC4" },
    { name: "אומנים", color: "#45B7D1" }
  ];

  const handleClassroomSelect = (classroom) => {
    setSelectedClassroom(classroom.name);
    // Pequeña pausa para que el niño vea la selección
    setTimeout(() => {
      nextStep();
    }, 500);
  };

  return (
    <div className="classroom-selection">
      
      <div className="classroom-buttons">
        {classrooms.map((classroom, index) => (
          <button
            key={index}
            className="classroom-button"
            style={{ backgroundColor: classroom.color }}
            onClick={() => handleClassroomSelect(classroom)}
          >
            {classroom.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassroomSelection;
