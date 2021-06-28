import React, { useState, useEffect } from 'react';
import "./timer.css"

const Timer = () => {
  const [second, setSecond] = useState("0");
  const [minute, setMinute] = useState("0");
  const [isActive, setIsActive] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let setTimer;

    if (isActive) {
        setTimer = setInterval(() => {
          
        const secondCounter = Math.floor(counter % 60);
        const minuteCounter = Math.floor(counter / 60);
        setSecond(secondCounter);
        setMinute(minuteCounter);

        setCounter(counter => counter + 1);
      }, 1000)
    }
    return () => clearInterval(setTimer);
  },)

  const stopTimer = () => {
    setCounter(0);
    setSecond(0);
    setMinute(0);
  }

  const resetTimer =() => {
    setCounter(0);
    setSecond(second);
    setMinute(minute);
  }

  return (
    <div className="container">
      <div className="time">
        <span>{minute}:</span>
        <span>{second}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)}>Start</button>
        <button onClick={resetTimer}> Reset</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
   </div>
  ) 
};


export default Timer;