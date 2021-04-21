import React from 'react';
const ToDoList=(props)=>
{

    return (
        <>
            <div className="todo_style">
                <li> 
                    <button onClick={()=>{
                        props.onSelect(props.id);
                    }}>-</button>

                    {props.text}
                </li>

            </div>
        </>
    );
};
export default ToDoList;