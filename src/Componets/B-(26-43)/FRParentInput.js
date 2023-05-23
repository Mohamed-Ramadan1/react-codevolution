import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor () {
        super();
        this.refInputP = React.createRef();
    }
    clickHandler = () => {
        this.refInputP.current.focus();
    }
    render() {
        return (
        <div>
            <FRInput ref={this.refInputP} />
            <button onClick={this.clickHandler}>fOCUS</button>
        </div>
        )
    }
    }

export default FRParentInput
