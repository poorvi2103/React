                                                    //challenge 5 vdeo 21

import React from 'react';                //to use JSX(html jesa dikhne vala part)
import ReactDOM from 'react-dom';
import {add,sub,mult,div} from  './CalcComp'
const App=()=>{
 return(
 <>
  <ul>
    <li>sum of two numbers is.... {add(4,5)}</li>
    <li>subtraction of two numbers is {sub(4,5)}</li>
    <li>Multiplication of two numbers is {mult(4,5)}</li>
    <li>Division of two numbers is {div(40,3)}</li>
  </ul>
  </>
  
);
};
export default App;