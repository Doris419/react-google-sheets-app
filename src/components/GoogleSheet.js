import React, { useState, useEffect } from 'react';
import "./GoogleSheet.css"
const GoogleSheet = () => {
    const [data, setData] = useState();
    React.useEffect(() => {
        fetch(`https://script.google.com/macros/s/AKfycbw-lXx6Vu4FrPmCRfVbS7pfjoW_n54s7UbJ7lzY68UN2TdNubC7TTiiSjHx18NIBgTGyg/exec`)
            .then((json) => json.json())
            .then((result) => setData(result))
            .catch(error => window.alert(error))
    }, []);
    console.log(data);
     
    return (
        <div>
            {data?.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <span className="cell" key={cellIndex}>{`${cell} `}</span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GoogleSheet;
