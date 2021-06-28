import React, { useState } from 'react';
import "./colorchanging.css"

const ColorChange = () => {
    const [background, setBackground] = useState("");
    const [color, setColor] = useState("");
   
    const onNumChange1 = (e) => setBackground(e.target.value);
    const onNumChange2 = (e) => setColor(e.target.value);

    return (
        <div className="input-field" style={{ backgroundColor: background }}>
            <h2>Color Change</h2>
            <div>
                <input className="input-color" type="text" placeholder="Background Color" onChange={onNumChange1} />
                <input type="text" className="input-color" placeholder="Font Color" onChange={onNumChange2} />
            </div>
            
            <div className= "div-output-element">
                <label style={{ color: color }}> Color Changing is seen </label>
            </div>
        </div>
    );
}

export default ColorChange;