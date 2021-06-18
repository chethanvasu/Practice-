import React, { useState, useEffect } from 'react';

import "./EntityList.css"

const EntityList = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    getEntityList();
  }, []);

  const getEntityList = async () => {
    const response = await fetch("https://www.thequint.com/api/v1/entities?limit=1000");
    const data = await response.json();

    setList(data.entities);
  };

  return (
    <div className="Entity-list">
    {
        list && list.map((item, index) => 
        ( 
        <div key={index}> 
            <div className="borderList">
                {item.id}
            </div>
            <div className="borderList">
                    {item.name}
            </div>
            <div className="borderList">
                    {item.type}
            </div>    
            <div className="borderList">
                    {item.website}
            </div>
            <div className="borderList">
                    {new Date(item['created-by']).toLocaleDateString("en-US")}
            </div>
        </div>
        )    
        )
    }
    </div>
  )
};
    
export default EntityList;