import React, { useState } from 'react';

import "./counter.css"

const Counter = () => {
    const [data, setData] = useState("");
    const [outputWord, setOutputWord] = useState("");
    const [outputCharacter, setOuputCharacter] = useState("");

    const onInputString = (e) => {
        if (e.target.value.length <= 20) {
            setData(e.target.value);
        }
    };

    const onClick = () => {
        const WC= data.split(' ').length;
        setOutputWord(WC);
        
        setOuputCharacter(data.length);
    };

    return (
        <div className="input-field">
            <h2>Counter</h2>
            <div>
            <textarea value={data} onChange={onInputString} rows="4" cols="50">
            </textarea>
            </div>
            <div>
                <input type="submit" className="submit-button" onClick={onClick}></input>
            </div>
            <div className="result-box">
                <label>Count of the Words: {outputWord}</label>   
                <label>Count of the Characters: {outputCharacter}</label>
            </div>
        </div>
    );
};

export default Counter;