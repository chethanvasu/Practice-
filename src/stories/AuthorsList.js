import React, { useState, useEffect } from 'react';

const AuthorsList = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    getAuthorsList();
  }, []);

  const getAuthorsList = async () => {
    const response = await fetch("https://www.thequint.com/api/v1/authors?limit=1000");
    const data = await response.json();
    console.log(data);

    setList(data.authors);

  };

  return (
    <div className="Authors-list">
      {
        list && list.map((item, index) => (<div key={index}> 
            <div>
                <div>{item.name}</div>
            <img src={`https://images.thequint.com/${item['avatar-url']}`} alt="something" />
            </div>
            </div>
      ) 
      )
      }
    </div>
  );
};
    
export default AuthorsList;