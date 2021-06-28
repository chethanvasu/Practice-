import React, { useState } from 'react';

import "./adding-elements.css"

const AddingElements = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState(["india", "usa", "uae", "south africa", "america", "north africa"]);
    const [position, setPosition] = useState(0);
    const [flag, setFlag] = useState(false);

    const onNameChange = (e) => setName(e.target.value);

    const onRadioChange = (e) => {
        // if (!flag) {
        //     setPosition(parseInt(e.target.value));
        // }

        setPosition(parseInt(e.target.value));
    };

    const onBtnAdd = (e) => {
        const newList = [...list];
        newList.push(name);
        if (list == "")
        alert("Please Enter a Text to continue");

        setList(newList);
        setName("");
    };

    const onBtnDelete = (e) => {
        setList(list.filter((c, index) => index !== position));
    };

    const onBtnEdit = (e) => {
        setName(list[position]); 
        setFlag(true);
    };

    const onBtnUpdate = (e) => {
        const newList = [...list];
        newList[position] = name;

        setList(newList); 
        setName("");
        setFlag(false);
    };

    const onBtnCancel = (e) => {
        setFlag(false);
        setName("");
    }

    return (
        <div>
            <h2>List Add</h2>
                <div className="input-box-elements">
                    <input value={name} onChange={onNameChange}/>
                    
                    {
                        flag ? (
                            <React.Fragment>
                                <input type="submit" value ="Update" onClick={onBtnUpdate}/>
                                <input type="button" value ="cancel" onClick={onBtnCancel}/>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <input type="submit"  value ="Add" onClick={onBtnAdd}/>
                                <input type="submit" value ="Delete" onClick={onBtnDelete}/>
                                <input type="submit" value ="Edit" onClick={onBtnEdit}/>
                            </React.Fragment>
                        )
                    }

                    <div className="output-box-elements">
                        {
                            list.map((item, index) => (
                                //For Radio Button after input text display//
                                <label key={index}>
                                    <input name="radio" type="radio" value={index} disabled={flag} checked={position === index ? "checked" : ''} onChange={onRadioChange} />{item}
                                </label>
                            ))
                        }
                    </div>
                </div>
        </div>
    );
};

export default AddingElements;
