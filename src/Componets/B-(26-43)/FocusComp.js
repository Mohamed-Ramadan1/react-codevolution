import React, { Component } from 'react'
import Input from './Input'

class FocusComp extends Component {
    constructor () {
        super()
        this.inpRef = React.createRef();
    }

    clickHandler = () => {
        this.inpRef.current.focusInput();
    }
    render() {
        return (
        <div>
                <Input ref={this.inpRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
        </div>
        )
    } 
}

export default FocusComp
