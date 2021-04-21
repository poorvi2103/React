import React, { useState } from 'react';
import ToDoList from './componToDoList';
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
    const delItem=(id)=>
    {
            console.log("deleted");
            setItems((oldList)=>{
                return oldList.filter((arrayElem,index)=>{
                        return index!==id;
                })
            })   
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
                                    <ToDoList
                                        key={index}
                                        id={index}
                                        text={itemval}
                                        onSelect={delItem}
                                    />
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