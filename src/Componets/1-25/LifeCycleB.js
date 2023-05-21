import React from "react";

class LifeCycleB extends React.Component{
    constructor () {
        super();

        this.state = {
            name:"mohamed"
        }
        console.log("Constructore b ")
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("from static b")
        return null
    }

    componentDidMount() {
        console.log("from didmount b")
    }

    render() {
        console.log(" render mehtod b")
        return (
            <div>
                The life cycle from the render b
            </div>
        )
    }
}
export default LifeCycleB;