import React, { useState } from 'react'; 
const App=()=>
{
    const state=useState();
    const[text,displayText]=useState("");
    const[FinalText,setFinalText]=useState();
    const inputEvent=(event)=>
    {
        //console.log(event.target.value);
        displayText(event.target.value);
    };
    const onSubmit=()=>
    {
         setFinalText(text);                     //onSubmit ya onclick k time p text ki jo value hogi,that will be stored in FinalText
    }
    return(
        <>
        <div>
            <h1>Hello {FinalText}</h1>
            <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={text}></input>     
            <button onClick={onSubmit}>ClickMe 👍</button>
        </div>
        </>
    );
};
export default App;