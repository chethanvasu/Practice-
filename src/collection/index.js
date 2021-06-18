import React, { useState, useEffect } from 'react';

import CollectionItem from "../components/collection-item";

import "./collection.css";

const CollectionView = () => {
  const [collectionList, setCollectionList] = useState(null);

  useEffect(() => {
    getCollections();
  }, []);

  const getCollections = async () => {
    const response = await fetch("https://www.thequint.com/api/v1/collections/home");
    const data = await response.json();

    setCollectionList(data.items);

  };
  
  return (
    <div className="collection-list">
      {
        collectionList && collectionList.map((item, index) => <CollectionItem key={index} collection={item} />)
      }
    </div>
  );
};
export default CollectionView;