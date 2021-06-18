import React, { useState, useEffect } from 'react';

import StoryItem from "../components/story-item";

import "./stories.css";

const StoriesView = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    getStoriesView();
  }, []);

  const getStoriesView = async () => {
    const response = await fetch("https://www.thequint.com/api/v1/stories");
    const data = await response.json();

    setList(data.stories);
  };

  return (
    <div className="story-list">
      {
        list && list.map((item, index) => <StoryItem key={index} story={item} />)
      }
    </div>
  );
};
    
    export default StoriesView;