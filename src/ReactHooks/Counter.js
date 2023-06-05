import React from 'react'


class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            counter:0
        }

    }
    clickHandeler=()=> {
        this.setState(prev => ({
            counter:prev.counter+1
        }))
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                <h1>The Counter value is {counter} from class</h1>
                <button onClick={this.clickHandeler}>Add 1 to counter</button>
            </div>
        )
    }
}

export default Counter;