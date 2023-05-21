import React, { Component } from 'react'
import RegulerComp from './RegulerComp';
import PureComp from './PureComponent';
import Memo from './Memo';

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
        console.log('Parent component render');

    return (
        <div>
            Parent Componenta
            <Memo name={this.state.name}/>
        </div>
        )
    }
}

export default ParentComp
