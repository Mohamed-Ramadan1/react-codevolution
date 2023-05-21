import React,{Component} from "react";

class Massage extends Component{
    constructor () {
        super();
        this.state = {
            message:"Welcom visitor",
        }

    }
    changeMassage() {
        this.setState({
            message:"Thank you for subscripe"

        });
    }
    render() {
        return (
            <div>
                <h1 className="hello">{this.state.message} </h1>
                <button onClick={()=> this.changeMassage()}>Subscripe</button>
            </div>
        );
    }

}

export default Massage;