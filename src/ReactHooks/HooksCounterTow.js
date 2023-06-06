import React,{useState} from 'react'

function HooksCounterTow() {
    const initial = 0;
    const [count, seCount] = useState(initial);
    return (
        <div>
            count:{count}
            <button onClick={ ()=> seCount(initial)}>Reset</button>        
            <button onClick={ ()=>seCount(count+1)}>Increment</button>        
            <button onClick={()=>seCount(count-1) }>Decrement</button>        
        </div>
    )
}

export default HooksCounterTow
