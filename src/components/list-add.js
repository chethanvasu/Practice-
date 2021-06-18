import React, { useState } from 'react';

const AddList = () => {
    const [name, setname] = useState("");
    const [age, setAge] = useState("");
    const [list, setList] = useState([]);

    const onNameChange = (e) => setname(e.target.value);
    const onAgeChange =(e) => setAge(e.target.value);

    const onBtnClick = (e) => {
        const newList = [...list];
        newList.push({
            name: name,
            age: age
        });

        setList(newList);
        setname("");
        setAge("");  
    };

    return (
        <div>
            <h2>List Add</h2>
            
            <div>
                <input value={name} onChange={onNameChange}/>
                <input value={age} onChange={onAgeChange}/>
                <input type="submit" onClick={onBtnClick}/>
            </div>
                
            <div>
                <ul>
                    {
                        list.map((item, index) => <li key={index}>{item.name}, {item.age}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default AddList;






























































//for single input value this is the code to be followed

// import React, { useState } from 'react';

// const AddList = () => {
//     const [text, setText] = useState("");
//     const [list, setList] = useState([]);

//     const onTextChange = (e) => setText(e.target.value);

//     const onBtnClick = (e) => {
//         const newList = [...list];
//         newList.push(text);

//         setList(newList);
//         setText("");
//     };

//     return (
//         <div>
//             <h2>List Add</h2>
//                 <div>
//                     <input value={text} onChange={onTextChange} />
//                     <input type="submit" onClick={onBtnClick}/>
//                 </div>
                    
//                 <div>
//                     <ul>
//                         {
//                             list.map((item, index) => <li key={index}>{item}</li>)
//                         }
//                     </ul>
//                 </div>
//         </div>
//     );
// };

// export default AddList;
