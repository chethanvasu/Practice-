import React, { useState } from 'react';

import "./DynamicDeleteElements.css";

const DynamicalDeletingELements = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState(["india", "usa", "uae", "south africa", "america", "north africa"]);
    const [position, setPosition] = useState(null);
    const [flag, setFlag] = useState(false);
    const [deleteItem, setDeleteItem] = useState("");

    const onNameChange = (e) => setName(e.target.value);
    const onDeleteItemChange = (e) => setDeleteItem(e.target.value);

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

    const onBtnDelIndex = (e) => {
        if (!deleteItem) {
            alert("Please Enter a Text to continue")
            return;
        }
        
        setList(list.filter((c, index) => index != (parseInt(deleteItem) - 1)));

        setDeleteItem("");
    };

    return (
            <div className="output-box-elements-result">
                <h2>Dynamical Operation Elements</h2>
                    <div className="Container">
                        <input value={name} onChange={onNameChange}/>
                        <input value ={deleteItem} type="number" onChange={onDeleteItemChange} />
                            {
                                flag ? (
                                    <React.Fragment>
                                        <input type="submit" value ="Update" onClick={onBtnUpdate}/>
                                        <input type="button" value ="cancel" onClick={onBtnCancel}/>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <input type="submit"  value ="Add" onClick={onBtnAdd}/>
                                        <input type="submit"  value ="Delete" onClick={onBtnDelIndex} />
                                    </React.Fragment>
                                )
                            }
        
                            <div  className="output-box-elements1">
                                {
                                    list.map((item, index) => (
                                        <label key={index}>
                                            <div className="result">
                                                <div>
                                                    {index+1}. &nbsp; <span style={{ color: `${index%2===0 ? "black" : "red"}` }}>{item}</span>
                                                </div>
                                                <React.Fragment>
                                                    <input type="submit" value ="Delete" disabled={flag} onClick={onBtnDelete(index)} />
                                                    <input type="submit" value ="Edit" disabled={flag} onClick={onBtnEdit(index)} />
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
        

export default DynamicalDeletingELements;
