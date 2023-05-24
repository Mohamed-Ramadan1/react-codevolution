import React from 'react';

const UpdatedCompounent = (originalComponent) => {
    class NewComponent extends React.Component{
        render() {
            return <originalComponent name="Mohamed"/>
        }
    }
    return NewComponent
}

export default UpdatedCompounent;