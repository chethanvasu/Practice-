import React, {useState} from "react";
import "./SimpleCalculator.css";

const SimpleCalculator = () => {
    const [result, setResult] = useState("");

    const HandleClick = (event) => {
        setResult(result.concat(event.target.name));
    }
    
    const Clear = () => {
        setResult("");
    }

    const BackSpace = () => {
        setResult(result.slice(0,-1));
    }

    const Calculate = () => {
        if (!result) {
            alert("Please take up an operation")
            return;
        }
        setResult(eval(result).toString());
    }

    return (
        <div className="container-inside">
            <label>Calculator</label>
            <form>
                <input type= "text" value ={result}></input>
            </form>
            <div className="buttons-alignment" className="button1" >
                <div> 
                    <button onClick={Clear}>Clear</button>
                </div>
                <div>
                    <button onClick={BackSpace}>c</button>
                </div>
                <div>
                    <button name= "/" onClick={HandleClick}>/</button>
                </div>
                <div>
                    <button name= "7"onClick={HandleClick}>7</button>
                </div>
                <div>
                    <button name= "8" onClick={HandleClick}>8</button>
                </div>
                <div>
                    <button name= "9" onClick={HandleClick}>9</button>
                </div>
                <div>
                    <button name= "4" onClick={HandleClick}>4</button>
                </div>
                <div>
                    <button name= "5" onClick={HandleClick}> 5</button>
                </div>
                <div>
                    <button name= "6" onClick={HandleClick}>6</button>
                </div>
                
                <div>
                    <button name= "1" onClick={HandleClick}>1</button>
                </div>
                <div>
                    <button name= "2" onClick={HandleClick}>2</button>
                </div>
                <div>
                    <button name= "3" onClick={HandleClick}>3</button>
                </div>
                <div> 
                    <button name= "-" onClick={HandleClick}>-</button>
                </div>
                <div>
                    <button name= "+"onClick={HandleClick}>+</button>
                </div>
                
                <div>
                    <button name= "1" onClick={HandleClick}>*</button>
                </div>
                <div>  
                    <button name= "0" onClick={HandleClick}>0</button>
                </div>
                <div>
                    <button name= "." onClick={HandleClick}>.</button>
                </div>
                <div>
                    <button onClick={Calculate}>=</button>
                </div>
            </div>
        </div>
    )
}


export default SimpleCalculator;