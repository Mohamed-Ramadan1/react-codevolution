import React from "react";

let SayHello=(props)=>{
    return (
        <div>
            <div>{`hello ${props.name}`}</div>
            <div>{props.children}</div>

        </div>
    );
}


export default SayHello ;