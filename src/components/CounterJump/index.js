import React, { useState, useEffect } from 'react';

import "./counterJump.css"

const CounterJump = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("test", count);
            const no = count == 3 ? 1 : (count + 1);
            setCount(no);
        }, 1000);

        return () => clearInterval(interval);
      }, []);
    
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
            <div className="box-element">{count == 1 ? "x" : null}</div>
            <div className="box-element">{count == 2 ? "x" : null}</div>
            <div className="box-element">{count == 3 ? "x" : null}</div>
        </div>
    );
};


export default CounterJump;