import React, {  useState ,useEffect} from "react";
import axios from 'axios';
const App=()=>
{
    const[val,setVal]=useState();
    const[name,setName]=useState();
    const[moves,setMoves]=useState();
    useEffect(()=>
    {
            async function getData(){
                const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${val}`);
                console.log(res);
                console.log(res.data.name);
                setName(res.data.name);
                setMoves(res.data.moves.length);
            }
            getData();
    });
    const displayVal=(event)=>
    {
        setVal(event.target.value);
    };
    return(
        <>
            <h1>You selected value <span style={{color:"red"}}>{val}</span></h1>
            <h1>My name is<span style={{color:"red"}}>{name}</span> </h1>
            <h1>I have <span style={{color:"red"}}>{moves}</span> </h1>
            <select value={val} onChange={displayVal}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    );
};
export default App;