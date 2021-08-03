import React, { useState } from 'react';
import "./calculator.css"

const Calculator = () => {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");

    const Calculate = () => {
        if(operation == "+")
        {
            return (setResult(parseInt(first) + parseInt(second)));
        }
        if(operation == "-")
        {
            return (setResult(parseInt(first) - parseInt(second)));
        }
        if(operation =="*")
        {
            return (setResult(parseInt(first) * parseInt(second)));
        }
        if(operation == "/")
        {
            return (setResult(parseInt(first) / parseInt(second)));
        }
        if(operation == "%")
        {
            return (setResult(parseInt(first) % parseInt(second)));
        }
    }

    return (
        <div>
            <input type="number" onchange={(e) => setFirst(e.target.value)} placeholder="Enter the First number"></input>
            <input type="number" onchange={(e) => setSecond(e.target.value)} placeholder="Enter the Second number"></input>
            <input type="text" onchange={(e) => setOperation(e.target.value)} placeholder="Enter the operation"></input>
            <button type ="submit" onClick={Calculate}>Calculator</button>
            <div>{result}</div>   
        </div>
    )
}
export default Calculator;

//     return (
//         <div className="container">
//             <h2>Simple Calculator</h2>
//             <div className ="result-box">
//                 <div >
//                     <label>{add}</label>
//                 </div>
//             </div>
//             <div className="inside-container">
//                 <div className="buttons"> 
//                     <div >
//                         <input type="button" value={7} onClick={onInputValue}></input>
//                     </div>
//                     <div>
//                         <input type="button" value={8} onClick={onInputValue}></input>
//                     </div>
//                     <div>
//                         <input type="button" value={9} onClick={onInputValue}></input>
//                     </div>
//                     <div>
//                         <input type="button" value={6} onClick={onInputValue}></input>
//                     </div>
//                     <div>
//                         <input type="button" value={5} onClick={onInputValue}></input>
//                     </div>
//                     <div>
//                         <input type="button" value={4} onClick={onInputValue}></input>
//                     </div>
//                     <div>
//                         <input type="button" value={3} onClick={onInputValue}></input>
//                     </div>
//                     <div>
//                         <input type="button" value={2} onClick={onInputValue}></input>
//                     </div>
//                     <div>
//                         <input type="button" value={1} onClick={onInputValue}></input>
//                     </div>
//                 </div>
//                 <div className="button-alignment">
//                     <input type="submit" value= " + " onClick={onClickAdd}></input>
//                     <input type="submit" value= " - " onClick={onClickSub}></input>
//                     <input type="submit" value= " * " onClick={onClickMult}></input>
//                     <input type="submit" value= " /  " onClick={onClickDiv}></input>
//                     <input type="submit" value="Clear" onClick={onClickClear}></input>
//                 </div>
//             </div>
//         </div> 
//     );
// }

