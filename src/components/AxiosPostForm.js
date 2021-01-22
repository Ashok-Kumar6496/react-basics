import axios from 'axios'
import React, {Component} from 'react'

class AxiosPostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
                // Below is setting the state just to update the dom  title valeu
                // this.setState({
                //     title : 'Changed'
                // })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div>
                        <input type="text" name="userId" onChange={this.changeHandler} value={this.state.userId}/>
                    </div>
                    <div>
                        <input type="text" name="title" onChange={this.changeHandler} value={this.state.title}/>
                    </div>
                    <div>
                        <input type="text" name="body" onChange={this.changeHandler} value={this.state.body}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AxiosPostForm
