import React from 'react'

class RefsDemo extends React.Component{
    constructor () {
        super();
        this.inputRef = React.createRef();

        this.cbRef = null;
        
        this.setCbRef = (el) => {
            this.cbRef=el
        }
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)

        
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Clcik</button>

            </div>
        )
    }
}

export default RefsDemo; 