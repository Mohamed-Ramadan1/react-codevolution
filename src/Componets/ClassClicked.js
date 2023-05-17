import React, { Component } from 'react';

class ClassClicked extends Component{

    clickHandeler() {
        console.log('The button is clicked you amazing')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandeler}>Clicke Me</button>
            </div>
        )
    }
}

export default ClassClicked;

