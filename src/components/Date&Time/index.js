import React, { useState, useEffect } from 'react';

const DateTime = () => {
    const [date, setDate] = useState(new Date());
   
    useEffect(() => {
     const interval = setInterval(() => setDate(new Date()),1000);
     
     return () => clearInterval(interval);
    }, []);
   
    return(
    <div className="box-element">
        {date.toString()}
    </div>);
   }

export default DateTime;