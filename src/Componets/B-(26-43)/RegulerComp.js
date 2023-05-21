import React, { Component } from 'react'

class RegulerComp extends Component {
    render() {
    console.log('Reguler component render')
    return (
        <div>
            Regular Components {this.props.name}
    
        </div>
    )
}
}

export default RegulerComp
