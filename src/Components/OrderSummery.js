import React from 'react';
import { useNavigate } from 'react-router-dom';
function OrderSummery() {
    const navigate=useNavigate()
    return (
        <>  
        <div>
                Your Order is confirmed

            </div>
            <button onClick={()=>navigate("/")}>Back to home </button>

        </>
        
        
        )
};

export default OrderSummery
