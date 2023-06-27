import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  return (
    <>
        <div>
      Hello From Home Component
      </div>
      <button onClick={()=>navigate("OrderSummery")}>Confirm Your order</button>
    </>
  )
}

export default Home
