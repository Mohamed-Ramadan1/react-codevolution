import React from "react";

const Hello = () => {
  // return (
  //     <h3>Hello </h3>
  // );

    return React.createElement(
    "div",
    null,
    React.createElement("h1", {className:"hello"}, "Hello Mohamed")
    );
};

export default Hello;
