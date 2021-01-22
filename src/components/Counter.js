import React, {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countValue: 0
        }
    }

    incrementCount() {
        this.setState({
            countValue: this.state.countValue + 1
        }, () => {
            console.log("Call back Value", this.state.countValue)
        })
    }

    decrementCount() {
        this.setState({
            countValue: this.state.countValue - 1
        }, () => {
            console.log("Call back Value", this.state.countValue)
        })
    }

    render() {
        return (
            <div>
                Count : {this.state.countValue}
                <br/>
                <button onClick={() => this.incrementCount()}>Increment</button>
                <button onClick={() => this.decrementCount()}>Decrement</button>
            </div>
        )
    }
}

export default Counter
