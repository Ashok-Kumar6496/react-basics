import React, {Component} from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello! Welcome"
        }
        this.clickFunction2 = this.clickFunction2.bind(this)
    }

    clickFunction() {
        this.setState({
            message: 'Thanks for Clicking'
        })
    }

    clickFunction1 = () => {
        this.setState({
            message: 'Thanks for Clicking'
        })
    }

    clickFunction2() {
        this.setState({
            message: 'Thanks for Clicking'
        })
    }

    render() {
        return (
            <div>

                {this.state.message}
                {/* Below are the ways how to bind the events. Few ways are commented but they are correct */}
                {/* <button onClick={this.clickFunction.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickFunction()}>Click</button> */}
                {/* <button onClick={this.clickFunction1}>Click</button> */}
                {/* Use line number 10 for only below line */}
                <button onClick={this.clickFunction2}>Click</button>
                {/* React suggests above two approaches for better performances */}
            </div>
        )
    }
}

export default EventBind
