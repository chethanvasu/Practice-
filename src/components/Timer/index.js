import React, { useState, useEffect } from 'react';
import "./timer.css"

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const setTimer = setInterval(() => {
      if (isActive) {
        setCounter(counter => counter + 1);
      }
    }, 1000)

    return () => clearInterval(setTimer);
  }, []);
  console.log(isActive);
  const startTimer = () => {
    setIsActive(true);
  }

  const stopTimer = () => {
    setIsActive(false);
  }

  const resetTimer =() => {
    setCounter(0);
  }

  return (
    <div className="container">
      <div className="time">
        <span>{counter}</span>
      </div>
      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={resetTimer}> Reset</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
   </div>
  ) 
};


export default Timer;