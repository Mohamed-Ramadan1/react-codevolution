import React,{Component} from 'react';

class Counter extends Component {
    constructor () {
        super()
        this.state = {
            count:0,
        }
    
    }


    incressCounter() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }
    incressFive() {
        this.incressCounter();
        this.incressCounter();
        this.incressCounter();
        this.incressCounter();
        this.incressCounter();

    }

    render() {
        return (
            <div>
                <div>Count- {this.state.count}</div>
                <button onClick={()=>this.incressFive()}>Incress-Counter</button>
                
            </div>
        );
    }
}

export default Counter;