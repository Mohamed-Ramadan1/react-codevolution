import React, { Component } from 'react'

class ClickCounter extends Component {
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
                <div>Counter: {this.state.count}</div>
            <button onClick={this.incrementCounter}>Clicked X Times</button>
        </div>
        )
    }
}

export default ClickCounter;