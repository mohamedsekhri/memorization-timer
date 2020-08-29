import React, {useState} from "react";


export default () => {
    let date = new Date();
    let [time, setTimer] = useState(date.toLocaleTimeString());
    
    setInterval(() => {
        date = new Date();
        setTimer(date.toLocaleTimeString());
    }, 1000);

    return <h1>{time}</h1>
}
