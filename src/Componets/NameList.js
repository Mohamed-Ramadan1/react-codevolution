import React from "react";
import Person from "./Person";

const NameList = () => {
    const person = [
        {
            id: 1,
            name: "mohamed",
            age: 30,
            gender: "male",
            skills: "React"
        },
        {
            id: 2,
            name: "ramadan",
            age: 430,
            gender: "male",
            skills: "Vue"
        },
        {
            id: 3,
            name: "Meray",
            age: 300,
            gender: "male",
            skills: "C   "
        },
        {
            id: 4,
            name: "Ahmed",
            age: 305,
            gender: "male",
            skills: "js"
        },
    ];
    const mapedList = person.map((person,index) => <Person key={index} person={person} />)
    
    return (
        <div>
            {
                mapedList
                
            }

        </div>
    )
}

export default NameList;