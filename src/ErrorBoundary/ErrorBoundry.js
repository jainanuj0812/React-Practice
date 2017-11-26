import React, { Component } from 'react';

class ErrorBoundry extends Component {
    state = {
        hasError: false,
        errorMessgae: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessgae: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessgae}</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry;