import React, { useState } from 'react';

const SampleApi = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const onSearchChange = (e) => setSearch(e.target.value);

  //Using Promises Concept

  const searchClick = () => {
    fetch(`https://api-adresse.data.gouv.fr/search/?q=${search}`)
    .then(response => response.json())
    .then(data => setList(data.features));
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
              <div>{item.properties.label}</div>
              <div>{item.properties.name}</div>
              <div>{item.properties.city}</div>
              <div>{item.properties.context}</div>
              <div>{item.properties.type}</div>
              <div>{item.geometry.type}</div>
              <div>{item.geometry.coordinates.join(",")}</div>
          </div>
        )}
      </div>

    </div>
  );
}

export default SampleApi;

// https://api.plos.org/search?q=lungs
// <!DOCTYPE html>
// <body>
//     <div class="container"></div>
// </body>
// </html>
// <script>
//     async function fetchText() {
//         let response = await fetch('https://www.thequint.com/api/v1/collections/home');
//         let data = await response.json();
//         let html = '';
//         data.items.forEach(async item => {
//             let htmlSegment = `<div>${item.name}</div>`;
//             html += htmlSegment;
//             let storyResponse = await fetch('https://www.thequint.com/api/v1/collections/' + item.slug);
//             let storyData = await storyResponse.json();
//             storyData.items.forEach(storyItem => {
//                 if (storyItem.type === "story") {
//                     console.log(storyItem.story.headline);
//                 }
//             });
//         });
//         let container = document.querySelector('.container');
//         container.innerHTML = html;
//     }
//     fetchText();
// </script>




