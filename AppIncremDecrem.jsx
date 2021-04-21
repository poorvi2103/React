import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Tooltip } from "@material-ui/core";

const App=()=>
{
    const state=useState();
    const[currVal,updateVal]=useState(0);
    const setVal=(event)=>
    {
        if(event.target.name==="Inc")
        {
            updateVal(currVal+1);
        }
        else if(event.target.name==="Dec")
        {
           if(currVal===0)
           {
               alert("Zero value reached");
           }
           else
           {
            updateVal(currVal-1);
           }
        }
    };

    return(
        <>
            <div className="main_div" style={
                {
                    width:"100%",
                    height:"100vh",
                    backgroundColor:"lightgreen",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }
            }>
                <div className="center_div" style={
                {
                    width:"25%",
                    height:"30%",
                    backgroundColor:"white",
                    alignItems:"center",
                
                   
                }
            }>
                    <h1 style={{textAlign:"center",backgroundColor:"slateblue",color:"white"}}>{currVal}</h1>
                    <div style={
                        {
                            display:"flex",
                            justifyContent:"space-around",
                            alignItems:"center"
                        }
                    }>
                         <Tooltip title="Add">
                        <Button 
                            style={{backgroundColor:"slateblue",color:"white",fontWeight:"500"}}
                            onClick={setVal}
                            name="Inc">
                            <AddIcon/>
                        
                        </Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                        <Button 
                            style={{backgroundColor:"slateblue",color:"white",fontWeight:"500"}}
                            onClick={setVal}
                            name="Dec">
                            <DeleteIcon/>
                        </Button>
                        </Tooltip>

                    </div>
                </div>
            </div>
            
        </>
    );
};
export default App;