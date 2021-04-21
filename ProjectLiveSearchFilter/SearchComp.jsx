import { useState } from "react";
import React from "react-router-dom";
import Sresult from "./SearchResult";
const Search=()=>{
    const[img,setImg]=useState();
    const inputEvent=(event)=>
    {
        const data=event.target.value;
        setImg(data);
    }
    return(
        <>
        <div className="SearchBar">
            <input type="text" placeholder="Searh Anything" onChange={inputEvent} value={img}/>
            {img===""?null:<Sresult image={img}/>}
        </div>
        </>
    );
};
export default Search;