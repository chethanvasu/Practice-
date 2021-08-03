import React, { useEffect, useState } from 'react';
import "./pagination.css";

    const Pagination = () => {
        const [list, setList] = useState([]);
        const [currentPage, setcurrentPage] = useState(1);
        const [itemsPerPage, setitemsPerPage] = useState(10);
        const [pageNumberLimit, setpageNumberLimit] = useState(5);
        const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
        const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

      
        const handleClick = (event) => {
          setcurrentPage(Number(event.target.id));
        };
      
        useEffect(() => {
          fetch("https://www.thequint.com/api/v1/collections/top-stories-video?")
          .then(response => response.json())
          .then(data => {
            setList([...list, ...data.items]);
          });
        }, []);

        const pages = [];
            for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
            pages.push(i);
        }
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
            
      
        const renderPageNumbers = pages.map((number) => {
            if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
                return (
                    <li
                        key={number}
                        id={number}
                        onClick={handleClick}
                        className={currentPage == number ? "active" : null}
                    >
                        {number}
                    </li>
                );
            } 
            else {
            return null;
          }
        });

        const renderData = (list) => {
            return (
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
            );
        };
      
        const handleNextbtn = () => {
          setcurrentPage(currentPage + 1);
            if (currentPage + 1 > maxPageNumberLimit) {
                setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
                setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
            }
        };
      
        const handlePrevbtn = () => {
          setcurrentPage(currentPage - 1);
            if ((currentPage - 1) % pageNumberLimit == 0) {
                setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
            }
        };

        const handleIncrementBtnMore = () => {
            setcurrentPage(currentPage + 10);  
        };

        const handleIncrementBtnless = () => {
            setcurrentPage(list.slice(0,-1));
        };
      
        let pageIncrementBtn = null;
            if (pages.length > maxPageNumberLimit) {
            pageIncrementBtn = <li onClick={handleNextbtn}> </li>;
        }
      
        let pageDecrementBtn = null;
            if (minPageNumberLimit >= 1) {
            pageDecrementBtn = <li onClick={handlePrevbtn}> </li>;
        }
      
        return (
          <div className= "container-pagination">
            {renderData(currentItems)}
            <ul className="pageNumbers">
                <li>
                    <button onClick={handleIncrementBtnMore}> &#60;&#60;</button>
                </li>
                <li>
                    <button onClick={handlePrevbtn}>&#60;</button>
                </li>
                <li className="li-state ">
                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}
                </li>
                <li>
                    <button
                        onClick={handleNextbtn}
                        disabled={currentPage == pages[pages.length - 1] ? true : false}
                        >
                        &#62;
                    </button>
                </li>
                <li>
                    <button onClick={handleIncrementBtnless}>&#62;&#62; </button>
                </li>
            </ul>
          </div>
        );
    }
export default Pagination;

















































    // const [list, setList] = useState([]);
    // const [offset, setOffset] = useState(0);
    // const [totalCount, setTotalCount] = useState(0);
    // const [loading, setLoading] = useState(true);
    // const [currentPage, setcurrentPage] = useState(1);
    // const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    // const [minPageNumberLimit, setminPageNumberLimit] = useState(0);


    // useEffect(() => {
    //     fetch(`https://www.thequint.com/api/v1/collections/top-stories-video?type=story&limit=10&offset=${offset}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setList([...list, ...data.items]);
    //         setTotalCount(data["total-count"]);
    //         setLoading(false);
    //     }); //destructing elements to get the stored elements 
    // }, [offset]);

    // const loadMore = () => {
    //     setOffset(offset + 10);  
    //     setLoading(true);
    // };

    // const handleClick = (event) => {
    //     setcurrentPage(Number(event.target.id));
    // };

    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // const pages = [];
    //     for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    //             pages.push(i);
    // }

    // const renderPageNumbers = pages.map((number) => {
    //     if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
    //       return (
    //         <li
    //           key={number}
    //           id={number}
    //           onClick={handleClick}
    //           className={currentPage == number ? "active" : null}
    //         >
    //           {number}
    //         </li>
    //       );
    //     } else {
    //       return null;
    //     }
    //   });

    // const handleNextbtn = () => {
    //     setcurrentPage(currentPage + 1);
    
    //     if (currentPage + 1 > maxPageNumberLimit) {
    //       setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    //       setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    //     }
    // };
    
    // const handlePrevbtn = () => {
    //     setcurrentPage(currentPage - 1);
    
    //     if ((currentPage - 1) % pageNumberLimit == 0) {
    //       setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    //       setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    //     }
    // };
    
    // let pageIncrementBtn = null;
    //     if (pages.length > maxPageNumberLimit) {
    //     pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    // }
    
    // let pageDecrementBtn = null;
    //     if (minPageNumberLimit >= 1) {
    //     pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    // }
    
    // return ( 
        
    //     <div className="output-box-elements-result">
    //         <div className="button-placement">
    //                 <button  onClick={loadMore} > &#60;&#60;</button>
    //                 <button  onClick={loadMore}> &#60;</button>
    //                 <button  onClick={loadMore}> &#62;</button>
    //                 <button  onClick={loadMore}> &#60;&#60;</button>
    //         </div>

    //         <div className="story-quint-list">
    //             {list.map(({story}, index) => {
    //                 if (!story) {
    //                     return null;
    //                 }

    //                 return (
    //                     <div className="container-blocks" key={index}>
    //                         <img className="image-position" src={`https://images.thequint.com/${story["hero-image-s3-key"]}`} />
    //                         <div style={{ display: "grid", rowGap: "4px" }}>
    //                             <div>{story.headline}</div>
    //                             <div>{story["author-name"]}</div>
    //                             <div>{new Date(story["published-at"]).toDateString()}</div>
    //                         </div>   
    //                     </div>
    //                 );
    //             })}
    //         </div>

    //         {
    //             list.length < totalCount ? <button className="btn-load-more" onClick={loadMore}>{`${totalCount-list.length}`} More</button> : null
    //         }

    //         {
    //             loading ? <div className="loader"></div> : null
    //         }

    //     </div>
    // );























// import React, { useEffect, useState } from 'react';

// const renderData = (data) => {
//     return (
//       <ul>
//         {data.map((todo, index) => {
//           return <li key={index}>{todo.title}</li>;
//         })}
//       </ul>
//     );
//   };

// const Pagination = () => {
//     const [list, setList] = useState([]);
//     const [currentPage, setcurrentPage] = useState(1);
//     const [itemsPerPage, setitemsPerPage] = useState(5);
  
//     const [pageNumberLimit, setpageNumberLimit] = useState(5);
//     const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
//     const [minPageNumberLimit, setminPageNumberLimit] = useState(0);;
//     const [loading, setLoading] = useState(true);

//     const handleClick = (event) => {
//         setcurrentPage(Number(event.target.id));
//     };
    
//     const pages = [];
//       for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
//         pages.push(i);
//     }
    
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    
//     const renderPageNumbers = pages.map((number) => {
//         if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
//           return (
//             <li
//               key={number}
//               id={number}
//               onClick={handleClick}
//               className={currentPage == number ? "active" : null}
//             >
//               {number}
//             </li>
//           );
//         } else {
//           return null;
//         }
//     });
//     useEffect(() => {
//         fetch("https://www.thequint.com/api/v1/collections/top-stories-video?type=story")
//           .then((response) => response.json())
//           .then((json) => setList(json));
//           setList([...list]);
//       }, []);

//     // useEffect(() => {
//     //     fetch(`https://www.thequint.com/api/v1/collections/top-stories-video?type=story&limit=10&offset=${offset}`)
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         setList([...list, ...data.items]);
//     //         setTotalCount(data["total-count"]);
//     //         setLoading(false);
//     //     }); //destructing elements to get the stored elements 
//     // }, [offset]);

//     const handleNextbtn = () => {
//         setcurrentPage(currentPage + 1);
    
//     if (currentPage + 1 > maxPageNumberLimit) {
//           setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//           setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
//         }
//         setLoading(true);
//     };
    
//     const handlePrevbtn = () => {
//         setcurrentPage(currentPage - 1);
    
//     if ((currentPage - 1) % pageNumberLimit == 0) {
//           setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//           setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
//         }
//         setLoading(true);
//     };
    
//     let pageIncrementBtn = null;
//     if (pages.length > maxPageNumberLimit) {
//         pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
//         setLoading(true);
//     }
    
//     let pageDecrementBtn = null;
//     if (minPageNumberLimit >= 1) {
//         pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
//         setLoading(true);
//     }
    
//     return ( 
//         <div>
//             <h1>Todo List</h1> <br />
//             {renderData(currentItems)}

//             <ul className="pageNumbers">
//                 <li>
//                     <button
//                         onClick={handlePrevbtn}
//                         disabled={currentPage == pages[0] ? true : false} > Prev
//                     </button>
//                 </li>
//                 {pageDecrementBtn}
//                 {renderPageNumbers}
//                 {pageIncrementBtn}
//                 <li>
//                     <button
//                         onClick={handleNextbtn}
//                         disabled={currentPage == pages[pages.length - 1] ? true : false} > Next
//                     </button>
//                 </li>
//             </ul>

//             <div className="output-box-elements-result">
//                 <div className="story-quint-list">

//                     {list.map(({story}, index) => {
//                         if (!story) {
//                             return null;
//                         }
//                         return (
//                             <div className="container-blocks" key={index}>
//                                 <img className="image-position" src={`https://images.thequint.com/${story["hero-image-s3-key"]}`} />
//                                 <div style={{ display: "grid", rowGap: "4px" }}>
//                                     <div>{story.headline}</div>
//                                     <div>{story["author-name"]}</div>
//                                     <div>{new Date(story["published-at"]).toDateString()}</div>
//                                 </div>   
//                             </div>
//                         );
//                     })}
//                 </div>
//                 {
//                     loading ? <div className="loader"></div> : null
//                 }

//             </div>
//         </div>
//     );

// }

// export default Pagination;