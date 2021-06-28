import React, { useState } from 'react';
import "./search-filter.css"


const SearchFilter = () => {
    const [name, setName] = useState("");

    //hard coding for values 
    const [list, setList] = useState(["india", "usa", "uae", "south africa", "america", "north africa"]);

    const onNameChange = (e) => setName(e.target.value);

    const onSearchChange = (e) => {
        const newList = [];
        
        //Searching for Element 
        list.forEach(element => {
            if (element.search(e.target.value) >= 0) {
                //To show the elements with index values so push the elements
                newList.push(element);
            }
        });
        console.log(newList);
    };

    const onBtnClick = (e) => {
        const newList = [...list];
        newList.push(name);

        setList(newList);
        setName("");
    };

    return (
        <div>
            <h2>Search Filter</h2>
            <div className="search-page-row-1">
                <input value={name} onChange={onNameChange}/>
                <input type="submit" onClick={onBtnClick}/>
            </div>

            <div className="input-box">
                <input onChange={onSearchChange} placeholder="Search here" />
            </div>

            <div className="output-box">
                {
                    list.map((item, index) => <div key={index}>{item}</div>)
                }
            </div>
        </div>
    );
};

export default SearchFilter;