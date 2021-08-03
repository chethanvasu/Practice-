import React, { useState } from 'react';

import "./DynamicElements.css";

const DynamicalAddingElements = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState(["india", "usa", "uae", "south africa", "america", "north africa"]);
    const [position, setPosition] = useState(null);
    const [flag, setFlag] = useState(false);

    const onNameChange = (e) => setName(e.target.value);

    const onBtnAdd = (e) => {
        if (!name) {
            alert("Please Enter a Text to continue")
            return;
        }
            
        if (list.find(c => c.toLowerCase() == name.toLowerCase())) {
            alert("Item already exists");
             return;
        }
            
        const newList = [...list];
        newList.push(name);
            
        setList(newList);
        setName("");
    };

    const onBtnDelete = (no) => (e) => {
        setList(list.filter((c, index) => index !== no));
    };

    const onBtnEdit = (no) => (e) => {
        setPosition(no);
        setName(list[no]); 
        setFlag(true);
    };

    const onBtnUpdate = (e) => {
        const newList = [...list];
        newList[position] = name;

        setList(newList); 
        setName("");
        setFlag(false);
        setPosition(null);
    };

    const onBtnCancel = (e) => {
        setFlag(false);
        setName("");
        setPosition(null);
    };

    return (
                <div className="output-box-elements-result">
                    <h2>Dynamical Operation Elements</h2>
                        <div>
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
                                    </React.Fragment>
                                )
                            }
        
                            <div  className="output-box-elements1">
                                {
                                    list.map((item, index) => (
                                        <label key={index}>
                                            <div className="result">
                                                {index+1}. &nbsp; {item}
                                                <React.Fragment>
                                                    <input type="submit" value ="Delete" onClick={onBtnDelete(index)}/>
                                                    <input type="submit" value ="Edit"  onClick={onBtnEdit(index)}/>
                                                </React.Fragment>
                                            </div>
                                        </label>
                                    ))
                                }
                            </div>
                        </div>
                </div>
            );
        };
        

export default DynamicalAddingElements;



