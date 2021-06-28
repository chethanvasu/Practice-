import React, { useState } from 'react';

const IncrementDecrement = () => {
    const [count, setCount] = useState(0);

    const onIncrement = (e) => {
        const value = count + 1
        setCount(value);
    };

    const onDecrement = (e) => {
        const value = count - 1
        setCount(value);
    };

    return (
        <div className="input-field">
            <h2>Increment and Decrement</h2>
            <div className="input-box-elements">
                <input type="button" value= " + " className="submit-button" onClick={onIncrement}></input>
                <div>
                    <label style={{ fontSize: "24px" }}> {count} </label>
                </div>
                <input type="button" value= " - " className="submit-button" onClick={onDecrement}></input>
            </div>
        </div>
    );

}

export default IncrementDecrement;