import React, { useEffect, useState } from 'react';

const ApiNH = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://www.nationalheraldindia.com/api/v1/stories")
        .then(response => response.json())
        .then(data => setList(data.stories));
  }, []);
  
  return ( 
   <div className="output-box-elements-result">
      <div style={{ display: "grid", rowGap: "40px", marginTop: "20px" }}>
        {list.map((item) => 
          <div style={{ display: "grid", rowGap: "10px" }}>
                <div>{item["author-name"]}</div>
                <div>{item.headline}</div>
                <div>{item["last-published-at"]}</div>
                <div>{item.subheadline}</div>
                <br></br>
                <div>
                    {item.sections.map((sectionItem) => sectionItem.name).join(", ")}
                </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ApiNH;


// headline authorname //tags-name