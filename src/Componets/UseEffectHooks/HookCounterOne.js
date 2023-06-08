import React, { useState,useEffect} from 'react'

const HookCounterOne = () => {
    const [count, setCount] = useState(0);
    useEffect(() => { 
        document.title=`You clicked ${count} times`
    } )
    return (
        <div>
            <button onClick={()=> setCount((prev)=>prev+1)}>Clicked {count} times</button>
            
        </div>
    )
}

export default HookCounterOne
