import React, { useState } from 'react';

const FibonacciSeries = () => {
    const [num, setNum] = useState("");
    const [fib, setFib] = useState([]);

    const onNumChange = (e) => {
        const n = e.target.value;

        setNum(n);

        const list = [];
        let t1 = 0, t2 = 1;
        let nextTerm = t1 + t2;

        list.push(t1);
        list.push(t2);

        for (var i = 1; i <= n - 2; ++i) {
            list.push(nextTerm);
            t1 = t2;
            t2 = nextTerm;
            nextTerm = t1 + t2;
        }
  
        setFib(list);
    };

    return (
        <div className="input-field">
            <h2>Addition</h2>
            <div>
                <label>Number 1:</label>
                <input className="input-color" type="number" onChange={onNumChange} />
            </div>
        
            <div>
                <label>Fibonacci is: {fib.join(",")}</label>
            </div>
        </div>
    );
};

export default FibonacciSeries;