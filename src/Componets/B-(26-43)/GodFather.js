import React, { Component } from 'react'
import Inputs from './Inputs'

class GodFather extends Component {
    constructor () {
        super();

        this.refClick = React.createRef();
    }

    focuseNow = () => {
        this.refClick.current.focusInput();
    }
    render() {
            return (
            <div>
                    <Inputs ref={this.refClick}/>
                    <button  onClick={this.focuseNow}>ClickFocus</button>
            </div>
            )
        }
    }

export default GodFather

