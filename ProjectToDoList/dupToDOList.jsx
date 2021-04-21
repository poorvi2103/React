import React, { useState } from 'react';
const App=()=>
{
    const state=useState();
    const[item,setItem]=useState("");
    const[items,setItems]=useState([]);
    const AddItem=(event)=>
    {
        setItem(event.target.value);
    };
    const AddList=()=>{
        setItems((oldList)=>{
            return[...oldList,item]
        });
        setItem("");
    };
    const delItem=()=>
    {
            console.log("deleted");
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>To DO List</h1>
                    <br/>
                    <input type="text" placeholder="Add Items" onChange={AddItem} value={item}/>
                    <button onClick={AddList}>+</button>
                    <ol>
                        {/*<li>{item}</li>*/}
                        {
                            items.map((itemval,index)=>{           //mapped "items" with some another array and every 
                                                                //..element of items will be stored in itemval one by one
                                //const key={index};
                                //console.log(key);
                                return (
                                    <>
                                     <li key={index} id={index}>
                                         <button className="deleteBut" onClick={delItem}>-</button>
                                         {itemval}
                                    </li>
                                    </>
                                );
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
};
export default App;