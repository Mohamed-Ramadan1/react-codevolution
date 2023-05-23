import React from 'react';

class RefsDemoo extends React.Component{
    constructor () {
        super();

        this.inputReef = React.createRef();
    }

    componentDidMount() {
        this.inputReef.current.focus(); 
    }

    clickHandler = () => {
        alert(this.inputReef.current.value)
    }



    render() {
        return (
            <div>
                <label>RefsDemoTisting</label>
                <input ref={this.inputReef} type='text' />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemoo;