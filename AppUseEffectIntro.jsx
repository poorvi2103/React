                                            //vdeo 53
import React, { useEffect, useState } from "react";
const App=()=>
{
    const[num1,setNum1]=useState(0);
    const[num2,setNum2]=useState(0);
    useEffect(()=>{alert("I am clickd");},[num1]);   //useEffect here only when num1 is changed 
    //useEffect(()=>{alert("I am clickd");},[]);   //useEffect here only when page is refreshed
    //useEffect(()=>{alert("I am clickd");});   //useEffect here only when page is refreshed or num1 is changed or num2 is changed 
                                                        //or any other changes in rnder method 

    return(
        <>
        <button onClick={()=>{setNum1(num1+1)}}>Click Me{num1}</button>
        <br/>
        <button onClick={()=>{setNum2(num2+1)}}>Click Me{num2}</button>
        </>
    );
};
export default App;