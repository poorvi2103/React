                                                        //vdeo 37
import React, { useState } from 'react'; 
/*const App=()=>
{
    const state=useState();
    const[details,setAllDetails]=useState({          //useState here contains an object
        fname: "",
        lname: "",
        email: "",
        mobile:""
    }
    );              
    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        //setFullName(event.target.name);
        const value=event.target.value;
        const name=event.target.name;
        setAllDetails((preValue)=>{
            //console.log(preValue);
            if(name==="fname"){
                return{
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    mobile:preValue.mobile
                };                      //end of return
            }                           //end of if
            else if(name==="lname"){
                return{
                    fname:preValue.fname,
                    lname:value,
                    email: preValue.email,
                    mobile:preValue.mobile
                };                          //end of return
            }                                       //end odf else
            else if(name==="email"){
                return{
                    fname:preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    mobile:preValue.mobile
                };                          //end of return
            }     
            else if(name==="mob"){
                return{
                    fname:preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    mobile:value
                };                          //end of return
            }     
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
            <form onSubmit={onsubmit}>
            <div style={{textAlign:"center",marginTop:"200pxh"}}>
                <h1>Hello {details.fname}  {details.lname} </h1>
                <h2>{details.email}</h2>
                <h2>{details.mobile}</h2>
                <input type="text" placeholder="Enter Your First Name"  name="fname" onChange={inputEvent} value={details.fname}></input> 
                <br/>
                <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={details.lname}></input>
                <br/>  
                <input type="text" placeholder="Enter Your email"  name="email" onChange={inputEvent} value={details.email}></input> 
                <br/>
                <input type="text" placeholder="Enter Your mobile no."  name="mob" onChange={inputEvent} value={details.mobile}></input> 
                <br/>   
                <button type="submit">Submit Me 👍</button>
            </div>
            </form>

        </div>
        </>
    );
};
export default App;*/
                                //or...vdeo 39 below ..in few lines
const App=()=>
{
    const state=useState();
    const[details,setAllDetails]=useState({          //useState here contains an object
        fname: "",
        lname: "",
        email: "",
        mobile:""
    }
    );              
    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        const value=event.target.value;
        const name=event.target.name;
        setAllDetails((preValue)=>{
            //console.log(preValue);
            return{
                ...preValue,
                [name]:value                                //spread operator(vdeo 38,39)
            }
            /*if(name==="fname"){
                return{
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    mobile:preValue.mobile
                };                      //end of return
            }                           //end of if
            else if(name==="lname"){
                return{
                    fname:preValue.fname,
                    lname:value,
                    email: preValue.email,
                    mobile:preValue.mobile
                };                          //end of return
            }                                       //end odf else
            else if(name==="email"){
                return{
                    fname:preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    mobile:preValue.mobile
                };                          //end of return
            }     
            else if(name==="mob"){
                return{
                    fname:preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    mobile:value
                };                          //end of return
            }   */  
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
            <form onSubmit={onsubmit}>
            <div style={{textAlign:"center",marginTop:"200pxh"}}>
                <h1>Hello {details.fname}  {details.lname} </h1>
                <h2>{details.email}</h2>
                <h2>{details.mobile}</h2>
                <input type="text" placeholder="Enter Your First Name"  name="fname" onChange={inputEvent} value={details.fname}></input> 
                <br/>
                <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={details.lname}></input>
                <br/>  
                <input type="text" placeholder="Enter Your email"  name="email" onChange={inputEvent} value={details.email}></input> 
                <br/>
                <input type="text" placeholder="Enter Your mobile no."  name="mobile" onChange={inputEvent} value={details.mobile}></input> 
                <br/>   
                <button type="submit">Submit Me 👍</button>
            </div>
            </form>

        </div>
        </>
    );
};
export default App;
                                           