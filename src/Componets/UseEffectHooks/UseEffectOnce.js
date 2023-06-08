import React,{useState,useEffect} from 'react'

function UseEffectOnce() {
    const[x,setX]=useState(0)
    const [Y, setY] = useState(0)
    const getPostion = e => {
    console.log('mouseEvent')
    setX(e.clientX)
    setY(e.clientY)
}
    useEffect(() => {
        console.log("From Effect");
        window.addEventListener('mousemove',getPostion)
    },[])
    return (
        <div>
            Hooks x-{ x} Y-{Y }
        </div>
    )
}

export default UseEffectOnce
