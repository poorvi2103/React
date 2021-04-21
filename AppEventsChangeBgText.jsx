
                                                //vdeo 33
import React, { useState } from 'react'; 
const App=()=>
{
    const state=useState();
    //const purple="#8e44ad";
    const[bgcolor,setBgColor]=useState("pink");
    const[name,setName]=useState("ClickMe")
    const changeBgAndName=()=>
    {
        setBgColor("yellow");
        setName("ouch :");
    };
    const setBackBg=()=>
    {
        setBgColor("purple");
        setName("eww :");
    };
    return(
        <div style={{backgroundColor:bgcolor}}>
            <button  style={{textAlign:"center",marginTop:"250px",marginLeft:"350px"}}onClick={changeBgAndName} onDoubleClick=
            {setBackBg}>{name}</button>
        </div>
    );
};
export default App;