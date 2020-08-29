
import React, { useState } from "react";
import Timer from "./Timer";

function App(){
    //The Random Generated Number
    let number = "";
    //The length State
    let [length, setLength] = useState(10);
    //The input value
    let len;
    
    //Random Number Generation
    for (let i = 0; i < length; i++){
        number += Math.floor((Math.random() * 10));
    }

    return (
        <div>
            <h1>{number}</h1>
            <input type="text" value={len} onChange={event => len = event.target.value}/>
            <button onClick={() => setLength(len)}>generate and start</button>
            <Timer />
        </div>
    );
}

export default App;
