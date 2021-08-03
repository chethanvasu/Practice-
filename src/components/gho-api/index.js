import React, { useEffect, useState } from 'react';

const GhoAPi = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://ghoapi.azureedge.net/api/Dimension")
        .then(response => response.json())
        .then(data => setList(data.value));
  }, []);
  
  return ( 
   <div className="output-box-elements-result">
      <div style={{ display: "grid", rowGap: "40px", marginTop: "20px" }}>
        {list.map((item) => 
          <div style={{ display: "grid", rowGap: "10px" }}>
                <div>{item.Code}</div>
                <div>{item.Title}</div>
          </div>
        )}
      </div>
    </div>
  );
}
export default GhoAPi;