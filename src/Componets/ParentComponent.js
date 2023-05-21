import React, { Component } from "react";
import ChiledComponent from "./1-25/ChiledCoponent";

class ParentComponent extends Component{
    constructor () {
        super();

        this.state = {
            parentName:"Parent",
        }
        this.greateParent=this.greateParent.bind(this)
    }

    greateParent(child) {
        alert(`Hello ${this.state.parentName} and you have chiled is ${child}`)
    }


    render() {
        return (
            <div>
                <ChiledComponent handler={this.greateParent} />
            </div>

        );
    }
}


export default ParentComponent;