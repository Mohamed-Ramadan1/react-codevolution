import React from 'react';

function Memo({ name }) {
    console.log("rendering memo componnet")
    return (
        <div>
            {name}
        </div>
    )

}

export default  React.memo(Memo);