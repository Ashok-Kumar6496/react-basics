import React, {Component} from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    // Below is the order of execution of methods while mounting(creating) the components
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ashok'
        }

        console.log("1st constructor will be executed from A component")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("2nd this static method will be executed from A component")
        return null
    }

    componentDidMount() {
        // If this component has any chile components then those child component will be executed before this method call.
        console.log("Last this method will be called from A component")

    }

    componentDidUpdate() {
        console.log("Called this Once i click on button which will change the state")
    }

    onChangeState = () => {
        this.setState({
            name: this.state.name + 'k2'
        })
    }

    render() {
        console.log("3rd this render method will be executed from A component")
        return (
            <div>
                Hey this is from Render method and {this.state.name}
                <button onClick={this.onChangeState}>Click me to update the state</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
