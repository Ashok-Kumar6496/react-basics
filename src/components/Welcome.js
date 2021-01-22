import React, {Component} from 'react';

class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor',
            flag: true
        }
    }

    changeMessage() {
        if (this.state.flag) {
            this.setState({
                message: 'Thanks for Visiting',
                flag: false
            })
        } else {
            this.setState({
                message: 'Welcome Visitor',
                flag: true
            })
        }

    }

    render() {
        return (
            <div>
                <h1>This is from Class Component with data as {this.props.name} and hero name as {this.props.heroName}
                    and message as {this.state.message}</h1>
                <button onMouseOver={() => this.changeMessage()}>Subscribe</button>
            </div>
        )

    }
}

export default Welcome