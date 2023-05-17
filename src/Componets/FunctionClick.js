import React from "react";

function clickHandeler() {
    document.getElementById("button").innerHTML = "Your amazing you a good";
    console.log("Button is Clicked sucssfuly")
}
const FunctionClick = () => {
    return (
        <div>
            <button id="button" onClick={clickHandeler}>Click</button>
        </div>
    )
}

export default FunctionClick;