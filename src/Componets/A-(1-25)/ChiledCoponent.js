import React from "react";

const ChiledComponent = (props) => {
    return (
        <div>
            <button onClick={()=>props.handler("Mohamed")} >Great Parent</button>

        </div>

    );
}

export default ChiledComponent;