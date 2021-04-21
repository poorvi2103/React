
                                                            //vdeo 51

import React from 'react';
import {FirstName,LastName} from './ContextAPIIntro';
const CompC=()=>
{
   return(
    <>
        <FirstName.Consumer>
            {
                (fname)=>{
                    return (
                            <LastName.Consumer>
                                {(lname)=>{
                                    return (<h1>My Nsme is {fname} {lname} </h1>);
                                }}
                            </LastName.Consumer>
                        );
                    }
            }
        </FirstName.Consumer>
        <h1>my name is pratham</h1>
    </>
   );
};
export default CompC;