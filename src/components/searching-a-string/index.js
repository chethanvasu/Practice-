import React, { useState } from 'react';

import "./searching-a-string.css"

const SearchingString = () => {
    const [name, setName] = useState("");
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);


    const onNameChange = (e) => setName(e.target.value);
    const onSearchChange = (e) => setSearch(e.target.value);

    const onBtnClick = (e) => {
        const newList = [...list];
        newList.push(name);

        setList(newList);
        setName("");
    };

    const onBtnSearch = (e) => { 
        const obj = list.find(c => c === search);
        if (obj) {
            alert("STRING EXSISTS");
        } else {
            alert("STRING DOES NOT EXSISTS");
        }
    };

    return (
        <div>
            <h2>List Add</h2>
            <div className = "input-box">
                <input value={name} onChange={onNameChange}/>
                <input type="submit" onClick={onBtnClick}/>
            </div>
         
            <div className = "input-box">
                <input type="text" onChange={onSearchChange}/>
                <input type="submit" value="Search" onClick={onBtnSearch}/>
            </div>

            <div className="output-box">
                {
                    list.map((item, index) => <div key={index}>{item}</div>)
                }
            </div>
            
        </div>
    );
};

export default SearchingString;
