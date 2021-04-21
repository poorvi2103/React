import React, { useState } from 'react'; 
const App=()=>
{
    const state=useState();
    const[text,setText]=useState("");
    const[FinalText,setFinalText]=useState();
    const[password,setPassword]=useState("");
    const[FinalPassword,setFinalPassword]=useState();
    const inputTextEvent=(event)=>
    {
        //console.log(event.target.value);
        setText(event.target.value);
    };
    const inputPasswordEvent=(event)=>
    {
        setPassword(event.target.value);
    };
    const onsubmit=(event)=>
    {
        event.preventDefault();         //to prevent the default behaviour of form refreshing on submit
         setFinalText(text);                     //onSubmit ya onclick k time p text ki jo value hogi,that will be stored in FinalText
         setFinalPassword(password);
    };
    return(
        <>
        <div className="main_div">
            <form onSubmit={onsubmit}>
            <div>
                <h1>Hello {FinalText}  {FinalPassword}</h1>
                <input type="text" placeholder="Enter Your Name" onChange={inputTextEvent} value={text}></input> 
                <input type="text" placeholder="Enter Your Password" onChange={inputPasswordEvent} value={password}></input>     
                <button type="submit">Submit Me 👍</button>
            </div>
            </form>

        </div>
        </>
    );
};
export default App;