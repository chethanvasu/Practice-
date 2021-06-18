import React, { useState, useEffect } from 'react';

import "./collectionItem.css";

const CollectionItem = ({collection}) => {
  const [storyList, setStories] = useState(null);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const response = await fetch(`https://www.thequint.com/api/v1/collections/${collection.slug}`);
    const data = await response.json();

    setStories(data.items.filter(c => c.type === "story").slice(0, 8));
  };

  if (!(storyList && storyList.length)) {
    return null;
  }

  return (
    <div className="collection-item">
        <div className="collection-name">{collection.name}</div>
        <div className="story-list">
          {
            storyList && storyList.map((item, index) => (
              <div key={index} className="story-item">
                <img className="story-img" src={`https://images.thequint.com/${item.story['hero-image-s3-key']}`} />
                <div>
                  <div>{item.story.headline}</div>
                  <div>{item.story['author-name']}</div>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  );
};


export default CollectionItem;       