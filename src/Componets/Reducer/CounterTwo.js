import React,{useReducer} from 'react'
const initValue = 0;
const reducer = (currentState, action) => {
    switch (action) {
        case 'increment': return currentState + 1;
        case 'decrement': return currentState - 1;
        case 'reset': return initValue;
        default: return currentState;
    }
}
const CounterTwo = () => {
    const [couner,dispatch]=useReducer(reducer, initValue);
    return (
        <div>
            <div>{couner}</div>
            <button onClick={() => dispatch('increment')}>Incress counter </button>
        
            <button onClick={() => dispatch("decrement")}>decrement counter</button>
        
            <button onClick={() => dispatch("reset")}>reset counter </button>
        
        </div>
    )
}

export default CounterTwo
