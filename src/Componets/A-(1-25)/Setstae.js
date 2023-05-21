import React, { Component } from "react";

class ChangeValue extends Component{
    constructor () {
        super()
        this.state = {
            value: 0,
        }
    }

    incressOne() {
        this.setState({
            value:this.state.value +1,
        })
    }

    increasTow() {
        this.setState((prev) => ({
            value:prev.value+2,
        }))
    }

    increasFive() {
        this.setState((prev) => ({
            value:prev.value+5,
        }))
    }

    resetCounter() {
        this.setState(() => ({
            value:0,
        }))
    }

    render() {
        return (
            <div>
                <h2>The value at the counter is {this.state.value}</h2>
                <button onClick={()=> this.incressOne()}>Add 1 to the counter</button>
                <button onClick={()=>this.increasTow()}>Add 2 to the counter</button>
                <button onClick={()=> this.increasFive()}>Add 5 to the counter</button>
                <button onClick={()=> this.resetCounter()}>Reset counter to 0</button>
            </div>
        )
    }
}
export default ChangeValue;