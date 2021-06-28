import React, { useState, useEffect } from 'react';

const DateTime = () => {
    const [date, setDate] = useState(new Date());
   
    useEffect(() => {
     const interval = setInterval(() => setDate(new Date()),1000);
     return () => clearInterval(interval);
    }, []);
   
    return(
    <div className="box-element">
        {[...Array(1).keys()].map(i => (<div key={i}> {date.toString()} </div>))}
    </div>);
   }

export default DateTime;