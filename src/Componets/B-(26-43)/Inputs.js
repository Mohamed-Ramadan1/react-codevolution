import React from 'react';


class Inputs extends React.Component{
    constructor () {
        super();
        this.inputRef = React.createRef();
    }

    focusInput = () => {
        this.inputRef.current.focus();
    }
    render() {
        return(
            <div> 
                <input type='text' ref={this.inputRef} />
            </div>
        )
    }
}


export default Inputs;