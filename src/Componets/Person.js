import React from "react";

const Person = ({person}) => {
    return (
        <div>
            <h1>{`Your Name is ${person.name}`}</h1>
            <p>{`Your Age is ${person.age}`}</p>
            <p>{`Your Gender is ${person.gender}`}</p>
            <p>{`Your Age is ${person.age}`}</p>
            <p>{`Your skills is ${person.skills}`}</p>
        </div>
    );
}

export default Person;