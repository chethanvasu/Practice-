import React, { useState } from 'react';

const Api = () => {
  const [search, setSearch] = useState("covid");
  const [list, setList] = useState([]);

  const onSearchChange = (e) => setSearch(e.target.value);

  //Using Promises Concept

  const searchClick = () => {
    fetch(`https://api.plos.org/search?q=${search}`)
    .then(response => response.json())
    .then(data => setList(data.response.docs));
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
                <div>{item.id}</div>S
                <div>{new Date(item.publication_date).toDateString()}</div>
                <div>{item.article_type}</div>
                <div>{item.author_display.join(", ")}</div>
                <br></br>
                <div>
                    {
                        item.abstract.map((value) => <p>{value}</p>)
                    }
                </div>
          </div>
        )}
      </div>

    </div>
  );
}
export default Api;

// https://covidtracking.com/api/states
// https://covidtracking.com/api/states/daily