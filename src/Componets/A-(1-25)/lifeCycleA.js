import React from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends React.Component{
    constructor () {
        super();

        this.state = {
            name:"mohamed"
        }
        console.log("Constructore a")
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("from static a ")
        return null
    }

    componentDidMount() {
        console.log("from didmount a ")
    }

    render() {
        console.log(" render mehtod a")
        return (
            <div>
                The life cycle from the render a
                <LifeCycleB/>
            </div>
        )
    }
}
export default LifeCycleA;