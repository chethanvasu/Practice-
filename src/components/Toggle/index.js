import React, { useState } from 'react';

const Toggle = () => {
  const [flag, setFlag] = useState(false);

  const toggleClick = () => setFlag(!flag);

  return (
   <div className="output-box-elements-result">
      <button onClick={toggleClick}>{!flag ? "hide" : "show"}</button>

      {
        !flag ? <div>Some text here</div> : null
      }
    </div>
  );
}

export default Toggle;