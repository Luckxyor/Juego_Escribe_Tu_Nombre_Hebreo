import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import './NameWriting.css';

const NameWriting = () => {
  const { selectedName, resetGame, nextStep } = useGame();
  const [writtenLetters, setWrittenLetters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [keyStates, setKeyStates] = useState({});

  // Separar el nombre en letras individuales (RTL)
  const nameLetters = selectedName.split('');

  const rows = [
    ['פ','ם','ן','ו','ט','א','ר','ק','שׂ'],
    ['ף','ך','ל','ח','י','ע','כ','ג','ד','ש'],
    ['⌫','ץ','ת','צ','מ','נ','ה','ב','ס','ז'],
    ['↵',',','.',' ','?123']
  ];

  const handleKeyPress = (key) => {
    // Ignorar teclas que no son para escribir
    if (key === '↵' || key === '?123') {
      return;
    }

    if (key === '⌫') {
      // Primero verificar si hay una letra incorrecta en la posición actual
      if (writtenLetters[currentIndex]) {
        const expectedLetter = nameLetters[currentIndex];
        const currentLetter = writtenLetters[currentIndex];
        if (currentLetter !== expectedLetter) {
          // Borrar la letra incorrecta en la posición actual
          const newWrittenLetters = [...writtenLetters];
          newWrittenLetters[currentIndex] = '';
          setWrittenLetters(newWrittenLetters);
          return;
        }
      }
      
      // Si no hay letra incorrecta en la posición actual, borrar la anterior
      if (currentIndex > 0) {
        const newWrittenLetters = [...writtenLetters];
        newWrittenLetters[currentIndex - 1] = '';
        setWrittenLetters(newWrittenLetters);
        setCurrentIndex(currentIndex - 1);
      } else if (currentIndex === 0 && writtenLetters[0]) {
        // Caso especial: borrar la primera letra si es incorrecta
        const expectedLetter = nameLetters[0];
        const currentLetter = writtenLetters[0];
        if (currentLetter !== expectedLetter) {
          const newWrittenLetters = [...writtenLetters];
          newWrittenLetters[0] = '';
          setWrittenLetters(newWrittenLetters);
        }
      }
      return;
    }

    // No permitir escribir si ya hay una letra en la posición actual
    if (writtenLetters[currentIndex]) {
      return;
    }

    // Verificar si la letra es correcta (incluyendo espacio)
    const expectedLetter = nameLetters[currentIndex];
    const isCorrect = key === expectedLetter;

    // Solo mostrar animación verde para letras correctas
    if (isCorrect) {
      setKeyStates({ ...keyStates, [key]: 'correct' });
      // Limpiar el estado visual después de la animación
      setTimeout(() => {
        setKeyStates({ ...keyStates, [key]: '' });
      }, 700);
    }

    // Escribir la letra (correcta o incorrecta)
    const newWrittenLetters = [...writtenLetters];
    newWrittenLetters[currentIndex] = key;
    setWrittenLetters(newWrittenLetters);

    if (isCorrect) {
      // Solo avanzar si la letra es correcta
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);

      // Verificar si completó el nombre
      if (newIndex === nameLetters.length) {
        setTimeout(() => {
          nextStep(); // Avanzar a la página de felicitaciones
        }, 1000);
      }
    }
    // Si es incorrecta, no avanza pero sí muestra la letra en rojo
  };

  return (
    <div className="name-writing">
      <div className="reference-name-blocks">
        {nameLetters.map((letter, index) => (
          <div 
            key={`ref-${index}`} 
            className="reference-block"
          >
            {letter}
          </div>
        ))}
      </div>
      
      <div className="name-blocks">
        {nameLetters.map((letter, index) => {
          const isWritten = writtenLetters[index];
          const isCorrect = isWritten === letter;
          const isIncorrect = isWritten && !isCorrect;
          
          return (
            <div 
              key={index} 
              className={`name-block ${isWritten ? 'filled' : ''} ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''} ${index === currentIndex ? 'current' : ''}`}
            >
              {writtenLetters[index] || ''}
            </div>
          );
        })}
      </div>

      <div id="keyboard">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => {
              let keyClass = 'key';
              if (key === '⌫') keyClass += ' backspace';
              else if (key === '↵') keyClass += ' enter';
              else if (key === ' ') keyClass += ' space';
              else if (key === '?123') keyClass += ' alt';
              
              return (
                <button
                  key={key}
                  className={`${keyClass} ${keyStates[key] || ''}`}
                  onClick={() => handleKeyPress(key)}
                >
                  {key === ' ' ? '' : key}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div id="mini-keyboard">
        <div className="mini-keyboard-row">
          <button
            className={`key mini-key ${keyStates['-'] || ''}`}
            onClick={() => handleKeyPress('-')}
          >
            -
          </button>
        </div>
      </div>

      <button className="back-button" onClick={resetGame}>
        התחל מחדש
      </button>
    </div>
  );
};

export default NameWriting;
