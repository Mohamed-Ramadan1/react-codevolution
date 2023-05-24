import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor () {
        super();

        this.state = {
            count:0,
        }
    }
    incrementCounter = () => {
        this.setState(prev => {
            return {count:prev.count+1}
        })
    }
    render() {
        return (
            <div>
                <div>Counter is : {this.state.count}</div>
                <h2 onMouseOver={this.incrementCounter}>Hoverd X times</h2>
            </div>
        )
    }
}

export default HoverCounter
