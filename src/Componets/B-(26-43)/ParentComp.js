import React, { Component } from 'react'
import RegulerComp from './RegulerComp';
import PureComp from './PureComponent';

class ParentComp extends Component {
    constructor () {
        super();
        this.state = {
            name:'mohamed'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({name:'mohamed'})
        },2000)
    }
    render() {
            console.log('Parent component render')

    return (
        <div>
            Parent Componenta
            <RegulerComp name={this.state.name}></RegulerComp>
            <PureComp name={this.state.name}></PureComp>
        
        </div>
        )
    }
}

export default ParentComp
