import React from 'react';

const StoryItem = ({ story }) => (
    <a href={`https://thequint.com/${story.slug}`} target="_blank" rel="noreferrer">
        <div className="story-list">
            <div>{story.headline}</div>
            <div>{story['author-name']}</div>
        </div>
    </a>
);

export default StoryItem;