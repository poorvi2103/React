
                                            //vdeo 59,60
import React from 'react';
import {useParams,useLocation, useHistory} from "react-router-dom";
/*const User=({match})=>
{
    return(
        <h1>user {match.params.fname} page</h1>
    );
};*/
const User=({match})=>
{
    const {fname,lname}=useParams();                  //name should be same as passes from path in AppReactROuter.jsx
    const location=useLocation();                     //vddeo 60
    console.log(location);
    const hist=useHistory();
    console.log(hist);
    return(
        <>
        <h1>user {fname} {lname} page</h1>
        <p>My current location is {location.pathname}</p>
        {location.pathname===`/user/poorvi/agarwal`?
        (<button onClick={()=>alert("you are awesome")}>click me</button>):null}
        <br/>
        <button onClick={()=>hist.goBack()}>GoBack</button>
        </>
    );
};
export default User;