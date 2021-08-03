import React, { useState } from 'react';

const ApiQuint = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const onSearchChange = (e) => setSearch(e.target.value);

  //Using Promises Concept

  const searchClick = () => {
    fetch(`https://www.thequint.com/api/v1/search?q=${search}`)
    .then(response => response.json())
    .then(data => setList(data.results.stories));
  };

  return ( 
   <div className="output-box-elements-result">
      <div>
        <input type="text" value={search} onChange={onSearchChange} />
        <button onClick={searchClick}>Search</button>
      </div>
      
      <div style={{ display: "grid", rowGap: "40px", marginTop: "20px" }}>
        {list.map((item) => 
          <div style={{ display: "grid", rowGap: "10px" }}>
                <div>{item["author-name"]}</div>
                <div>
                    {item.tags.map((tagName) => tagName.name).join(", ")}
                </div>
                <div>{item.headline}</div>
          </div>
        )}
      </div>

    </div>
  );
}
export default ApiQuint;