import React, { useState } from 'react';

const AddingCheckboxElements = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState([
        {name: "india", isChecked: false},
        {name: "usa", isChecked: false},
        {name: "uae", isChecked: true},
        {name: "south africa", isChecked: false},
        {name: "america", isChecked: false},
        {name: "north africa", isChecked: false}
    ]);
    const [flag, setFlag] = useState(false);

    const onNameChange = (e) => setName(e.target.value);

    const onCheckboxChange = (index) => (e) => {
        const temp = [...list];
        temp[index].isChecked = e.target.checked;
        setList(temp);
    };

    const onBtnAdd = (e) => {
        if (!name) {
            alert("Please Enter a Text to continue");
            return;
        }

        if (list.find(c => c.name.toLowerCase() == name.toLowerCase())) {
            alert("Item already exists");
            return;
        }

        const newList = [...list];
        newList.push({
            name: name,
            isChecked: false
        });

        setList(newList);
        setName("");
    };

    const onBtnDelete = (e) => setList(list.filter(c => !c.isChecked));

    const onBtnEdit = (e) => {
        if (list.filter(c => c.isChecked).length !== 1) {
            alert("Please select only 1 Option");
            return;
        }

        const obj = list.find(c => c.isChecked);

        setName(obj.name); 
        setFlag(true);
    };
    
    const onBtnUpdate = (e) => {
        const position = list.findIndex(c => c.isChecked);
     
        const newList = [...list];
        newList[position].name = name;

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
            <h2>Checkbox Operation Elements</h2>
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
                                    <input
                                        type="checkbox"
                                        name="checkbox" 
                                        value={index}
                                        disabled={flag}
                                        checked={item.isChecked}
                                        onChange={onCheckboxChange(index)}
                                    />
                                    {item.name}
                                </label>
                            ))
                        }
                    </div>
                </div>
        </div>
    );
};

export default AddingCheckboxElements;
