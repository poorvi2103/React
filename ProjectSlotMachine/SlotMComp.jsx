
                                                        //vdeo 28
import React from "react"; 

const SlotM=(props)=>                   //x,y,z props of SlotM will come here in props
{
    //let x='😄';
    //let y='😄';
    //let z='😄';

    /*let x=props.x;
    let y=props.y;
    let z=props.z;*/    //or------>

    let{x,y,z}=props;                    //object distructuring...destructring of object "props"



    if((x===y)&&(y==z))
    {
        return(
            <>
            <div className="slot_inner">
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is Matching.</h1>
                <hr/>
            </div>
            </>
        );
    }
    else{
        return(
            <>
            <div className="slot_inner">
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is NOt Matching.</h1>
                <hr/>
            </div>
            </>
        );
    }
}
export default SlotM;