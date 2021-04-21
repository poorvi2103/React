
                                                //vdeo 36
import React, { useState } from 'react'; 
const App=()=>
{
    const state=useState();
    const[FullName,setFullName]=useState({          //useState here contains an object
        fname: "",
        lname: ""
    });
    
    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        //setFullName(event.target.name);
        const value=event.target.value;
        const name=event.target.name;
        setFullName((preValue)=>{
            //console.log(preValue);
            if(name==="fname"){
                return{
                    fname: value,
                    lname: preValue.lname
                };                      //end of return
            }                           //end of if
            else if(name==="lname"){
                return{
                    fname:preValue.fname,
                    lname:value
                };                          //end of return
            }                                       //end odf else
        }
        );        //end of setFullName
    };//end of InputEvent
   
    const onsubmit=(event)=>
    {
        event.preventDefault();         //to prevent the default behaviour of form refreshing on submit
        alert("form submitted");
    };
    return(
        <>
        <div className="main_div">
            <form onSubmit={onsubmit}>h
            <div>
                <h1>Hello {FullName.fname}  {FullName.lname} </h1>
                <input type="text" placeholder="Enter Your First Name"  name="fname" onChange={inputEvent} value={FullName.fname}></input> 
                <br/>
                <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={FullName.lname}></input>     
                <button type="submit">Submit Me 👍</button>
            </div>
            </form>

        </div>
        </>
    );
};
export default App;