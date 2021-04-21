
                                                        //video 30
import React, { useState } from 'react';
/*const state=useState();
console.log(state);         //error:Hooks must be called in a React function component or a custom React Hook function .. so write in App comp
 
let count=1;
const IncNum=()=>
{
    count++;
    console.log("clicked"+ count);    
};
*/
const App=()=>
{
    const state=useState();
    console.log(state);
    
    const[count,setCount]=useState(0); //destructuring useState array...and initial value of count=0      
    console.log(count);   
    //let count=1;
    const IncNum=()=>
    {
        //count++;
        setCount(count+1);        //changing state of count or updating count
        console.log("clicked"+ count);    //error:Hooks must be called in a React function component or a custom React Hook function .. 
    };
    return(
        <>
        <h1>{count}</h1>
        <button style={ {color:"white",backgroundColor:"skyblue"}}onClick={IncNum}>Click Me</button>
        </>
    );
};
export default App;