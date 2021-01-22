import React, {Component} from 'react'

class LifeCycleB extends Component {
    // Below is the order of execution of methods while mounting(creating) the components
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ashok'
        }

        console.log("1st constructor will be executed from B component")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("2nd this static method will be executed from B component")
        return null
    }

    componentDidMount() {
        // If this component has any chile components then those child component will be executed before this method call.
        console.log("Last this method will be called from B component")
    }

    render() {
        console.log("3rd this render method will be executed from B component")
        return (
            <div>
                Hey this is from child Render method
            </div>
        )
    }
}

export default LifeCycleB
