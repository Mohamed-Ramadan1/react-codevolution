import React from "react";

class Form extends React.Component {
    
    constructor () {
        super();
        
        this.state = {
            userName: "",
            comments: "",
            topic: "react"
        }

        this.handelUserNameChange = this.handelUserNameChange.bind(this);
    }

    handelUserNameChange = (event) => {
        this.setState({
            userName: event.target.value,
        })
    }

    handelTextArea = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handelTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handelSubmit = (event) => {
        alert(`${this.state.comments} ${this.state.userName} ${this.state.topic}`)
        
    }

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <div>
                    <label>UserName</label>
                    <input
                        type="text"
                        value={this.state.userName}
                        onChange={this.handelUserNameChange} />
                </div>

                <div>
                    <label>Coments</label>
                    <textarea value={this.state.comments} onChange={this.handelTextArea}></textarea>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handelTopicChange}>
                        <option value="react" on>React</option>
                        <option value="anguler">Anguler</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
        
    
}

export default Form;