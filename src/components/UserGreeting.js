import React, {Component} from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // Below is the way using short circuit operator. if left side is true then only right side will be returned. else nothing
        // return this.state.isLoggedIn && <div>Welcome Ashok</div>
        //Below way is the efficient way of rendering JSX using ternary operator
        return this.state.isLoggedIn ? <div>Welcome Ashok</div> : <div>Welcome Guest</div>
        // Below way is using conditional rendering using literals.
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Ashok</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return message

        // Below is conditional rendering using plain if and else statements
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Ashok
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

    }
}

export default UserGreeting
