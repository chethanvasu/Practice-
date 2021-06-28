import React, { useState, useEffect } from 'react';

const NumberSetTimeOut = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCount(numbercount => numbercount + 1);
        }, 1000);
        
        return () => clearInterval(interval);
      }, []);
    

    return (
        <div className="output-box">
            Count: {count}
        </div>
    );
};


export default NumberSetTimeOut;