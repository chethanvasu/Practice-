import React, { useState } from 'react';
import "./SearchAString.css"

const SearchAString = () => {
    const [inputString, setInputString] = useState("");
    const [find, setFind] = useState("");
    const [list, setList] = useState([]);

    const onInputString = (e) => setInputString(e.target.value);
    const onSearchString =(e) => setFind(e.target.value);

    const onBtnClick = () => {
        const findingString = inputString.indexOf(find);
            if (findingString !== -1) {
                alert("STRING EXSISTS");
            } else {
                alert("STRING DOES NOT EXSISTS");
            }

    }

    return (
        <div>
            <h2>Searching for a String</h2>
            <div className ="Input-box">
                <input value={inputString} placeholder="Enter the String" onChange={onInputString}/>
                <input value={find} placeholder="Search for String" onChange={onSearchString}/>
                <button onClick={onBtnClick} > Search</button> 
            </div>
                
            <div>
                <ul>
                    {
                        list.map((item, index) => <li key={index}>{item.inputString}, {item.searchString}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default SearchAString;

