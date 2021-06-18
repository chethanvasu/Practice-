import React, { useState } from 'react';

import "./add-two-numbers.css"

const AddTwoNumbers = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [sum, setSum] = useState(null);

    const onClick = () => {
        setSum(parseInt(num1) + parseInt(num2));
    };

    const onNumChange1 = (e) => setNum1(e.target.value);
    const onNumChange2 = (e) => setNum2(e.target.value);

    return (
        <div className="input-field">
            <h2>Addition</h2>
            <div>
                <label>Number 1:</label>
                <input className="input-color" type="number" onChange={onNumChange1} />
                <label>Number 2:</label>
                <input type="number" className="input-color" onChange={onNumChange2} />
            </div>
            <div>
                <input type="submit" className="submit-button" onClick={onClick}></input>
            </div>
            <div>
                <label>Addition of Two numbers is: {sum}</label>
            </div>
        </div>
    );
};

export default AddTwoNumbers;