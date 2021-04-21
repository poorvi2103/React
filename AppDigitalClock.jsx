

                                            //video 32
                                            
import React, { useState } from 'react'; 
const App=()=>
{
    const state=useState();
    const[currentTime,setTime]=useState(new Date().toLocaleTimeString());
    const updateTime=()=>
    {
        setTime(new Date().toLocaleTimeString());
    };
    setInterval(updateTime,1000);    //updateTime function will be called after 1000ms i.e.1 second
    return(
        <>
        <h1 style={{textAlign:"center",marginTop:"250px"}}>{currentTime}</h1>
        </>
    );
};
export default App;