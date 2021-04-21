import React from "react";
import { NavLink } from "react-router-dom";
const Error=()=>
{return(
    <>
    <div className="setStyle2">
    <h1>404 Error Page</h1>
    <p>Oops!Page NOt Found</p>
    <NavLink to="/">Go Back</NavLink>
    </div>
    </>
);};
export default Error; 