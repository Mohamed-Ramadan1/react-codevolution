import React from "react";

let SayHello = (props) => {
    const { name, heroName } = props;
    return (
        <div>
            <div>{`hello ${name}`}</div>
            <div>{`The Hero Name is  "${heroName}"`}</div>

        </div>
    );
}


export default SayHello ;