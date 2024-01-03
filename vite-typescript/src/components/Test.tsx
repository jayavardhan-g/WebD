import { MouseEvent } from "react";


function Test(){
    let l='';
    const clicked=(event:MouseEvent)=>{
        console.log(event.pageX)
    }
    return (
        <>  
            <h1 onClick={clicked}>
                Click here
            </h1>
        </>
    )
}
export default Test;