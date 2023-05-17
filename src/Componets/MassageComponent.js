import React, { Component } from 'react';

class MassageBinding extends Component {
    constructor () {
        super()
        this.state={
            massage:"hello !"
        }

    }
    // changeMassage() {
    //     document.querySelector("h1").innerHTML="Good you clickedt the button"

    // }

    changeMassage() {
        this.setState({
            massage:"Good bay!"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.massage} </h1>
                <button onClick={this.changeMassage.bind(this)}>Click me to change thext</button>
            </div>
        )
    }
}

export default MassageBinding;