import React, { useEffect, useState } from 'react';
import "./Api-quint-times.css";

const ApiQuintStories = () => {
    const [list, setList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     getData(offset);
    // }, []);

    // const getData = (offsetValue) => {
    //     fetch(`https://www.thequint.com/api/v1/collections/top-stories-video?limit=10&offset=${offsetValue}`)
    //     .then(response => response.json())
    //     .then(data => setList([...list, ...data.items]));
    // };

    // const loadMore = () => {
    //     setOffset(offset + 10);
    //     getData(offset + 10);
    // };

    //To create loadMore Function include the function in the api and use it in the usestate [] for function execution

    useEffect(() => {
        fetch(`https://www.thequint.com/api/v1/collections/top-stories-video?type=story&limit=10&offset=${offset}`)
        .then(response => response.json())
        .then(data => {
            setList([...list, ...data.items]);
            setTotalCount(data["total-count"]);
            setLoading(false);
        }); //destructing elements to get the stored elements 
    }, [offset]);

    const loadMore = () => {
        setOffset(offset + 10);  
        setLoading(true);
    };

    return ( 
        <div className="output-box-elements-result">
            <div className="story-quint-list">
                {list.map(({story}, index) => {
                    if (!story) {
                        return null;
                    }

                    return (
                        <div className="container-blocks" key={index}>
                            <img className="image-position" src={`https://images.thequint.com/${story["hero-image-s3-key"]}`} />
                            <div style={{ display: "grid", rowGap: "4px" }}>
                                <div>{story.headline}</div>
                                <div>{story["author-name"]}</div>
                                <div>{new Date(story["published-at"]).toDateString()}</div>
                            </div>   
                        </div>
                    );
                })}
            </div>

            {
                list.length < totalCount ? <button className="btn-load-more" onClick={loadMore}>{`${totalCount-list.length}`} More</button> : null
            }

            {
                loading ? <div className="loader"></div> : null
            }

        </div>
    );
}
export default ApiQuintStories;