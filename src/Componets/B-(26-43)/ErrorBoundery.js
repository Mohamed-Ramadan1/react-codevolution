import React, { Component } from 'react'

class ErrorBoundery extends Component {
    constructor() {
        super()
    
    this.state = {
        hasError:false
    }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error,info) {
        
    }

    render() {
        if (this.state.hasError) {
            return <h1>Somthing went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundery
