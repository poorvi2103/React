                                            //challenge 6
import React, { useState } from 'react';
const App=()=>
{

    const state=useState();
    const[time,setTime]=useState(new Date().toLocaleTimeString());
    const getTime=()=>
    {
        setTime(new Date().toLocaleTimeString());
    };
    return(
        <>
        <h1>{time}</h1>
        <button onClick={getTime}>Get Time</button>
        </>
    );
};
export default App;               