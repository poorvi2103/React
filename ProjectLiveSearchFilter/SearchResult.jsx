import React from "react";
const Sresult=(props)=>
{
    const img=`https://source.unsplash.com/600x400/?${props.image}`;
    return(
        <>
            <img src={img} alt="search"/>
        </>
    );
};
export default Sresult;