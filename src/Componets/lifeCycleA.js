import React from "react";

class LifeCycleA extends React.Component{
    constructor () {
        super();

        this.state = {
            name:"mohamed"
        }
        console.log("Constructore")
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("from static ")
        return null
    }

    componentDidMount() {
        console.log("from didmount ")
    }

    render() {
        console.log(" render mehtod")
        return (
            <div>
                The life cycle from the render
            </div>
        )
    }
}
export default LifeCycleA;