


                                            //vdeo 51
import React, { createContext } from 'react';
import CompA from './ContextAPICompA';
const FirstName=createContext();       //created context
const LastName=createContext();
const App=()=>
{
    return (
    <>
    <FirstName.Provider value={"pooorvi"}>
        <LastName.Provider value="Agarwal">
        <CompA/>
        </LastName.Provider>
    </FirstName.Provider>
    </>
    );
};
export default App;
export {FirstName,LastName};